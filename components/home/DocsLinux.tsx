import dynamic from 'next/dynamic'
import React from 'react'
import { getPagesUnderRoute } from 'nextra/context'
import Link from '../Link'
import Image from '../Image'
const ArrowRightShort = dynamic(() => import('../Icons/ArrowRightShort'))
import { Page } from '../Page'

function LatestDocs() {
  const page = getPagesUnderRoute('/docs/linux')
  const latestPage = page[0] as Page
  return (
    <article>
      <Link
        href={latestPage.route}
        title={latestPage.meta?.title || latestPage.frontMatter?.title || latestPage.name}
      >
        <Image
          className="object-cover w-full max-w-full rounded-lg aspect-video"
          src={latestPage.frontMatter?.image}
          width={1200}
          height={600}
          alt={latestPage.meta?.title || latestPage.frontMatter?.title || latestPage.name}
          placeholder="blur"
          blurDataURL={latestPage.frontMatter?.image}
          sizes="(max-width 1200px) 80vw, 50vw"
          priority
        />
      </Link>
      <div className="mt-5 space-y-3">
        <h2 className="text-2xl font-bold leading-5 tracking-tight text-slate-800 dark:text-slate-200">
          <Link
            href={latestPage.route}
            title={latestPage.meta?.title || latestPage.frontMatter?.title || latestPage.name}
          >
            {latestPage.meta?.title || latestPage.frontMatter?.title || latestPage.name}
          </Link>
        </h2>
        <p className="text-base font-normal truncate text-slate-800 dark:text-slate-200">
          {latestPage.frontMatter?.description}
        </p>
        <Link
          href={latestPage.route}
          title={latestPage.meta?.title || latestPage.frontMatter?.title || latestPage.name}
          className="inline-flex items-center text-base font-semibold leading-5 text-slate-800 dark:text-slate-200"
        >
          Đọc thêm
          <ArrowRightShort className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </article>
  )
}

function OldDocs() {
  const page = getPagesUnderRoute('/docs/linux')
  return (
    <>
      {page.slice(1, 6).map((page: Page) => {
        return (
          <React.Fragment key={page.route}>
            <article>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold leading-5 tracking-tight text-slate-800 dark:text-slate-200">
                  <Link
                    href={page.route}
                    title={page.meta?.title || page.frontMatter?.title || page.name}
                  >
                    {page.meta?.title || page.frontMatter?.title || page.name}
                  </Link>
                </h2>
                <p className="mb-4 text-base font-normal truncate text-slate-800 dark:text-slate-200">
                  {page.frontMatter?.description}
                </p>
                <Link
                  href={page.route}
                  title={page.meta?.title || page.frontMatter?.title || page.name}
                  className="inline-flex items-center text-base font-semibold leading-5 text-slate-800 dark:text-slate-200"
                >
                  Đọc thêm
                  <ArrowRightShort className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </article>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default function DocsLinux() {
  return (
    <section className="py-16 bg-gray-100 lg:pt-24 lg:pb-28 dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight lg:text-center md:text-4xl">
          Tài liệu về Linux
        </h2>
        <div className="mb-10 text-lg font-normal lg:text-center lg:text-xl lg:px-64 lg:mb-16 dark:text-neutral-300">
          Tổng hợp các tài liệu về Linux dành cho những bạn HR mới tuyển dụng về System.
        </div>
        <div className="grid grid-cols-1 gap-8 md:mt-12 lg:grid-cols-2 lg:gap-20">
          <LatestDocs />
          <div className="space-y-6">
            <OldDocs />
          </div>
        </div>
      </div>
    </section>
  )
}
