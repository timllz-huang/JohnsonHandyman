"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            What we supply, what you supply, and how we choose materials for
            your job.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you supply materials?
            </p>
            <p>
              Yes. We supply all timber, fixings, and standard materials. We use
              trade-quality products that last.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Can I buy my own fixtures?
            </p>
            <p>
              You can. If you want a specific vanity, tap, or light fitting, buy
              it and we will install it. Just check with us first on sizing.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What timber do you use for decks?
            </p>
            <p>
              We commonly use treated pine, merbau, or spotted gum. We will talk
              through the options and the cost difference.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you recommend products?
            </p>
            <p>
              We do. We have used the same brands for years. We will tell you
              what works and what does not.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What if I want a specific paint color?
            </p>
            <p>
              You choose the color. We will get it mixed and do the prep work
              properly so the finish looks right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
