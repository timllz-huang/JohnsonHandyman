"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout399() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Major</p>
            <h2 className="mb-5 text-h2 font-bold md:mb-6">
              Bigger jobs done right
            </h2>
            <p className="text-medium">
              The work we build our name on, managed end to end.
            </p>
          </div>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Carpentry</p>
                <h3 className="mb-2 text-h5 font-bold">
                  New decks, pergolas, and custom timber work
                </h3>
                <p>Framing, structural repairs, and built-ins made to last.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="More"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  More
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-6.jpg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Builds</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Room additions and granny flat conversions
                </h3>
                <p>Walls, doors, plasterboard, and framing done properly.</p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="More"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  More
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-39.jpg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Bathrooms</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Full bathroom renovations managed end to end
                </h3>
                <p>
                  Waterproofing, tiling, vanities, and fixtures without the
                  stress.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="More"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  More
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-44.jpg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
          <Card className="flex flex-col">
            <div className="flex flex-1 flex-col justify-center p-6">
              <div>
                <p className="mb-2 text-small font-semibold">Plumbing</p>
                <h3 className="mb-2 text-h5 font-bold">
                  Minor plumbing repairs and small drainage fixes
                </h3>
                <p>
                  Leaking taps, toilet repairs, and mixer replacements done
                  neatly.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Button
                  title="More"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  More
                </Button>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
              <img
                src="https://d1p38huyj6upaa.cloudfront.net/default-28.jpg"
                alt="Relume placeholder image 1"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
