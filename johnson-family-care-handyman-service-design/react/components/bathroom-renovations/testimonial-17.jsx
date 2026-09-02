"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { StarFull } from "relume-icons";

export function Testimonial17() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-1">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-h2 font-bold md:mb-6">
            Customer testimonials
          </h2>
          <p className="text-medium">What your neighbours say about our work</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "They turned our tired old bathroom into something we are proud
              of. The waterproofing was done properly and they cleaned up every
              day before they left."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Margaret H</p>
                <p>Penrith, NSW</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "One team for the whole job. No chasing plumbers or tilers. The
              Johnson boys just got on with it and the result is first rate."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">David R</p>
                <p>Blacktown, NSW</p>
              </div>
            </div>
          </Card>
          <Card className="flex w-full flex-col items-start justify-between p-6 md:p-8">
            <div className="mb-5 flex gap-1 md:mb-6">
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
              <div className="shrink-0">
                <StarFull className="size-6 text-scheme-text" />
              </div>
            </div>
            <h5 className="text-medium">
              "Honest quote, honest work. They found a small leak behind the
              wall and fixed it without drama. The new bathroom looks
              fantastic."
            </h5>
            <div className="mt-5 flex w-full flex-col items-start md:mt-6 md:w-fit md:flex-row md:items-center">
              <div className="mb-4 size-12 min-h-12 min-w-12 overflow-hidden rounded-full md:mr-4 md:mb-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Testimonial avatar"
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold">Sarah M</p>
                <p>Parramatta, NSW</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
