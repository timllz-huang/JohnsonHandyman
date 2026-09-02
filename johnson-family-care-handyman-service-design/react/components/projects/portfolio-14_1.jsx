"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Portfolio14_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 scheme-2">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">More finished work</h2>
          <p className="text-medium">
            Filter by the type of job you are planning.
          </p>
        </div>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Granville bathroom</a>
              </h3>
              <p>
                Full refit with new vanity, toilet, and floor-to-ceiling tiles.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Bathroom</a>
                </Badge>
                <Badge>
                  <a href="#">Tiling</a>
                </Badge>
                <Badge>
                  <a href="#">Plumbing</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Toongabbie room addition</a>
              </h3>
              <p>
                Converted a spare room into a home office with built-in desk.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Room addition</a>
                </Badge>
                <Badge>
                  <a href="#">Framing</a>
                </Badge>
                <Badge>
                  <a href="#">Plasterboard</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">St Marys tap repair</a>
              </h3>
              <p>Replaced a leaking mixer tap and fixed a running toilet.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Plumbing</a>
                </Badge>
                <Badge>
                  <a href="#">Repairs</a>
                </Badge>
                <Badge>
                  <a href="#">Minor</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Quakers Hill deck sand</a>
              </h3>
              <p>Sanded back an old deck and re-stained it in natural tone.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Outdoor</a>
                </Badge>
                <Badge>
                  <a href="#">Decking</a>
                </Badge>
                <Badge>
                  <a href="#">Staining</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Wentworthville TV mount</a>
              </h3>
              <p>Mounted a 65-inch TV and soundbar with hidden cables.</p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Home care</a>
                </Badge>
                <Badge>
                  <a href="#">Hanging</a>
                </Badge>
                <Badge>
                  <a href="#">Mounting</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
          <Card className="mb-8 break-inside-avoid">
            <div>
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <div className="px-5 py-6 sm:px-6">
              <h3 className="mb-2 text-h5 font-bold">
                <a href="#">Rooty Hill gutter clear</a>
              </h3>
              <p>
                Cleared gutters and downpipes, then pressure washed the
                driveway.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
                <Badge>
                  <a href="#">Outdoor</a>
                </Badge>
                <Badge>
                  <a href="#">Gutters</a>
                </Badge>
                <Badge>
                  <a href="#">Cleaning</a>
                </Badge>
              </div>
              <Button
                title="View project"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
                asChild={true}
                className="mt-5 md:mt-6"
              >
                <a href="#">View project</a>
              </Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary">
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
