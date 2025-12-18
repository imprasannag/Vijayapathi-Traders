import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  console.error('Please set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env file');
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

async function ensureCategory(slug: string, payload: any) {
  const { data, error } = await supabase
    .from('categories')
    .upsert({ ...payload, slug }, { onConflict: 'slug' })
    .select('id,slug')
    .limit(1);
  if (error) throw error;
  return data?.[0]?.id;
}

async function seed() {
  try {
    const sanitaryId = await ensureCategory('sanitary', {
      name: 'Sanitary',
      description: 'Sanitary fittings and fixtures',
      image_url: '',
      display_order: 1,
    });

    const electricalId = await ensureCategory('electricals', {
      name: 'Electricals',
      description: 'Electrical switches, wires, fittings',
      image_url: '',
      display_order: 2,
    });

    const products = [
      {
        category_id: sanitaryId,
        name: 'Cera Faucet Model X',
        slug: 'cera-faucet-x',
        description: 'Durable brass faucet with chrome finish.',
        specifications: { material: 'brass', finish: 'chrome', warranty: '2 years' },
        price_band: '₹500-1000',
        images: ['https://example.com/images/cera-faucet-x-1.jpg'],
        featured: true,
        in_stock: true,
        display_order: 1,
      },
      {
        category_id: sanitaryId,
        name: 'Jaquar Showerhead S',
        slug: 'jaquar-shower-s',
        description: 'High pressure, multi-spray showerhead.',
        specifications: { diameter: '100mm', spray_types: ['rain', 'jet'] },
        price_band: '₹800-1500',
        images: ['https://example.com/images/jaquar-shower-s-1.jpg'],
        featured: false,
        in_stock: true,
        display_order: 2,
      },
      {
        category_id: electricalId,
        name: 'Havells Switch 2B',
        slug: 'havells-switch-2b',
        description: 'Durable 2-button switch.',
        specifications: { type: '2B', color: 'white' },
        price_band: '₹100-300',
        images: ['https://example.com/images/havells-switch-2b.jpg'],
        featured: false,
        in_stock: true,
        display_order: 1,
      },
    ];

    const { data, error } = await supabase
      .from('products')
      .upsert(products, { onConflict: 'slug' })
      .select('id,slug,name');

    if (error) throw error;
    console.log('Seeded products:', data);
    console.log('Seeding complete.');
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
}

seed();
