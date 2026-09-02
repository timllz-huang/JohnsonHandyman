"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Straight answers to the questions we get asked most often.
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
              Do you charge for quotes?
            </p>
            <p>
              No. We come out, look at the job, and give you a written quote for
              free. You get a clear price before any work starts.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Are you insured?
            </p>
            <p>
              Yes. We carry full public liability insurance. You can see our
              certificates before we start any work.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How soon can you start?
            </p>
            <p>
              Small repairs can often be booked within a week. Larger jobs
              depend on our current schedule, but we will give you a clear start
              date in your quote.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do I need to be home?
            </p>
            <p>
              For the quote, it helps if you are there to show us the job.
              During the work, many customers give us access and go about their
              day.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How does payment work?
            </p>
            <p>
              We take a deposit for larger jobs and the balance on completion.
              For small repairs, payment is due when the work is finished and
              you are happy with it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
