"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Faq8_4() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-3">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            How we run a job from start to finish, including communication,
            cleanup, and our guarantee.
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
              Who manages my job?
            </p>
            <p>
              One of the family. You will have a direct phone number for the
              person running your job. No call centers.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you clean up afterwards?
            </p>
            <p>
              Always. We sweep, vacuum, and remove our rubbish. We leave your
              home cleaner than we found it.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Is your work guaranteed?
            </p>
            <p>
              We stand behind our work. If something is not right, call us and
              we will come back and make it right.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              How do you communicate during a job?
            </p>
            <p>
              We tell you what is happening each day. If we find something
              unexpected, we stop and talk to you before doing anything else.
            </p>
          </div>
          <div>
            <p className="mb-3 text-medium font-bold md:mb-4">
              Do you provide a written contract?
            </p>
            <p>
              For major works, yes. You get a clear scope of work, the price,
              and the timeline in writing before we start.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
