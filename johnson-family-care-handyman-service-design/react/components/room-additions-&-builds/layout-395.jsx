"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout395() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Process</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">How it works</h1>
          <p className="text-medium">
            Three simple steps from first call to finished room.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 1</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Get in touch for a consultation
                </h2>
                <p>Call or send a message about your build.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Contact"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Contact
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 2</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  Free on-site quote and assessment
                </h2>
                <p>We measure, listen, and give you a clear price.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Quote"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Quote
                </Button>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image 1"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
              <div>
                <p className="mb-2 font-semibold">Step 3</p>
                <h2 className="mb-3 text-h4 font-bold md:mb-4">
                  We build and clean up after ourselves
                </h2>
                <p>The work gets done right. The site stays tidy.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Projects"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Projects
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
