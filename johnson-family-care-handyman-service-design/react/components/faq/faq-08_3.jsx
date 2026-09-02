"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Straight talk on pricing, quotes, and what happens when we come out
            to see the job.
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
              Are quotes really free?
            </p>
            <p>
              Yes. We come out, look at the job, and give you a written quote.
              There is no charge and no obligation.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How do you price jobs?
            </p>
            <p>
              We price by the job, not by the hour. You know the cost before we
              start. No surprises at the end.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What payment do you take?
            </p>
            <p>
              We take bank transfer or cash. For larger jobs, we may ask for a
              deposit to secure materials, with the balance due on completion.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              What happens at the on-site quote?
            </p>
            <p>
              We measure up, talk through your options, and answer your
              questions. You get a clear written quote within a day or two.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you charge a call-out fee?
            </p>
            <p>
              No call-out fee for quotes. If you book a small repair, the quote
              is still free and the repair price is agreed before we start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
