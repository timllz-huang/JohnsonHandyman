"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Stats43() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-[0.5fr_1fr] lg:items-center lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Numbers</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              The family business by the numbers
            </h2>
            <p className="text-medium">
              We measure success in finished jobs and neighbours who call us
              back. Here is where we stand today.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Services" variant="secondary">
                Services
              </Button>
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
          <div className="grid grid-cols-1 gap-8 py-2 md:grid-cols-2">
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Years in trade
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                25+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Combined experience across two generations of tradesmen
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Jobs completed
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                1,200+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Finished projects across Western Sydney and the Blue Mountains
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Family members
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                6
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                Tradesmen and support staff working together every day
              </p>
            </Card>
            <Card className="p-8">
              <h3 className="mb-8 text-h6 font-bold md:mb-10 lg:mb-12">
                Suburbs served
              </h3>
              <p className="text-right text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
                40+
              </p>
              <div className="my-4 h-px w-full bg-scheme-border" />
              <p className="text-right">
                From Penrith to Parramatta and everywhere in between
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
