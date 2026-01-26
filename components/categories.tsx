'use client';

import { useCategories } from '@/context/CategoriesContext';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from './Breadcrumb';
import { slugConvert } from '@/lib/utils';

export default function CategoriesPage() {
  const breadcrumbItems = [
    { name: 'Home', href: '/' },
    { name: 'Categories', href: '/categories', isActive: true },
  ];

  const { isLoading, categories }: any = useCategories();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">

        {/* HEADER */}
        <div className="text-center mb-12">
          <Breadcrumb items={breadcrumbItems} />
          <h1 className="text-3xl font-bold mb-4 mt-3">
            Shop by Category
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of products organized by category.
          </p>
        </div>

        {/* CATEGORY GRID */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading categories...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories?.data?.map((category: any) => (
              <Link
                key={category.id}
                href={`/categories/${slugConvert(category.name)}`}
                className="relative group overflow-hidden rounded-md shadow hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={
                      category.image ||
                      'https://semantic-ui.com/images/wireframe/image.png'
                    }
                    alt={category.name || 'Category'}
                    width={300}
                    height={288}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
