"use client";

import { Blog } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

//IMPORTS

//EXPORT FUNCTION
interface BlogsProp {
  blogs: Blog[];
}

export default function BlogPosts({ blogs }: BlogsProp) {
  return (
    <div className=" h-[100vh]">
      <div className=" grid p-[2vw] grid-cols-3 gap-[5vw] h-[90vh] text-center">
        {blogs.map((b) => (
          <div
            key={b.id}
            className=" shadow-lg bg-[#E9E4D9] p-[1.3vw] h-[30%] overflow-hidden rounded-xl hover:bg-[#41554F] hover:text-[white]"
          >
            <div className=" space-x-[3vw]">
              <strong>{b.name}</strong>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Show More</Button>
                </DialogTrigger>
                <DialogContent className=" bg-[#E9E4D9] p-[2vw]">
                  <DialogHeader>
                    <DialogTitle>
                      {b.name} {String(b.publisheDate)}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex items-center p-[2vw]">{b.blogPost}</div>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <br></br>
            {b.blogPost}
          </div>
        ))}
      </div>
    </div>
  );
}
