"use client";

import React, { useCallback } from "react";
import { Input } from "../../../../components/input";
import { Label } from "../../../../components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/popover";
import { Button } from "../../../../components/button";
import {
  ArrowDownToLineIcon,
  CalendarIcon,
  MoveRightIcon,
  PaperclipIcon,
  XIcon,
} from "lucide-react";
import { format } from "date-fns";
import { rc } from "../../../../utils/css";
import { Calendar } from "../../../../components/calendar";
import { Textarea } from "../../../../components/textarea";
import { useDropzone, FileRejection } from "react-dropzone";
import { getBase64 } from "../../../../utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/dialog";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../../../components/drawer";

function ContributeRegisterPage() {
  const [date, setDate] = React.useState<Date>();
  const [selectedImages, setSelectedImages] = React.useState<File[] | null>(
    null
  );

  const onDropImages = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (acceptedFiles.length > 0) {
        setSelectedImages((prev) => {
          if (prev) {
            return [...prev, ...acceptedFiles];
          }
          return acceptedFiles;
        });
        handleUploadImages(acceptedFiles[0]);
      }
      rejectedFiles.forEach((file) => {
        file.errors.forEach((err) => {
          // if (err.code === "file-too-large") {
          //   toast({
          //     variant: "destructive",
          //     title: "File too large",
          //     description: "Please upload a file smaller than 5 MB",
          //   });
          // } else if (err.code === "too-many-files") {
          //   toast({
          //     variant: "destructive",
          //     title: "Too many files",
          //     description: "Please upload a maximum of 5 files",
          //   });
          // }
        });
      });
    },
    []
  );

  const {
    getRootProps: getRootPropsImages,
    getInputProps: getInputPropsImages,
    isDragActive: isDragActiveImages,
  } = useDropzone({
    onDrop: onDropImages,
    maxFiles: 5,
    maxSize: 5242880,
    multiple: false,
  });

  const handleUploadImages = async (selectedImage: File | null) => {
    // setLoadingImages((prev) => {
    //   if (prev) {
    //     return [...prev, true];
    //   }
    //   return [true];
    // });
    try {
      if (selectedImage) {
        const base64image = await getBase64(selectedImage);
        // const upload = await fetch(`/api/upload?upload_type=business_image`, {
        //   method: "POST",
        //   body: JSON.stringify({
        //     file: base64image,
        //   }),
        // });
        // if (upload.ok) {
        //   const { meta } = await upload.json();
        //   form.setValue("images_url", [
        //     ...(form.getValues("images_url") as string[]),
        //     meta.mediaLink,
        //   ]);
        //   // setLoadingImages((prev) => {
        //   //   if (prev) {
        //   //     return prev.map((_, i) => (i === prev.length - 1 ? false : _));
        //   //   }
        //   //   return prev;
        //   // });
        // }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <section className="wrapper pt-10 pb-20">
        {/* <MapIcon
          className="rounded-full p-3.5 bg-[#265F51] stroke-white mb-2"
          size={60}
        /> */}
        <h2 className="text-4xl font-medium tracking-tight">
          Add your Waste Photo and Details
        </h2>

        <div className="mt-8 grid md:grid-cols-5 grid-cols-1 md:gap-x-8 gap-y-4 w-full">
          <div
            className="text-sm border w-full md:max-w-lg h-80 rounded-2xl relative col-span-2"
            {...(selectedImages?.length === 0 || !selectedImages
              ? isDragActiveImages && getRootPropsImages()
              : {})}
          >
            <input {...getInputPropsImages()} />
            {selectedImages?.length === 0 || !selectedImages ? (
              <div
                className="h-full p-4 flex flex-col cursor-pointer justify-center items-center"
                {...getRootPropsImages()}
              >
                <Image
                  src="/dummy/qr.jpeg"
                  alt="qr"
                  width={128}
                  height={128}
                  className="w-32 h-32 mx-auto"
                />
                <div className="flex flex-row items-center justify-center">
                  <PaperclipIcon className="mr-1 mt-[1px] h-4 w-4 block flex-none" />
                  <p className="text-decoration: text-sm font-semibold underline underline-offset-2">
                    Upload/replace by clicking or dropping an image, You can
                    also scan this QR from you phone
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 p-4">
                {selectedImages?.map((file, index) => (
                  <div key={index} className="relative">
                    <div className="w-40 h-32">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="preview"
                        className="w-40 h-32 object-cover rounded-xl"
                      />
                    </div>
                    <XIcon
                      className="absolute top-1 right-1 h-4 w-4 bg-white rounded-full cursor-pointer p-0.5 z-100"
                      onClick={() => {
                        setSelectedImages((prev) => {
                          if (prev) {
                            return prev.filter((_, i) => i !== index);
                          }
                          return prev;
                        });
                      }}
                    />
                  </div>
                ))}
                {selectedImages?.length < 5 && (
                  <div
                    className="w-40 h-32 p-4 flex cursor-pointer flex-row items-center justify-center border-dashed border-2 border-gray-300 rounded-xl"
                    {...getRootPropsImages()}
                  >
                    <PaperclipIcon className="mr-1 mt-[1px] h-3 w-3" />
                    <p className="text-decoration: text-xsm font-semibold underline underline-offset-2">
                      Add images
                    </p>
                  </div>
                )}
              </div>
            )}

            {isDragActiveImages && (
              <div className="absolute top-0 bg-white/95 w-full h-full flex flex-row items-center justify-center rounded-2xl">
                <ArrowDownToLineIcon className="mr-1 mt-[1px] h-4 w-4" />
                <p className="font-semibold text-sm">
                  Drop here too add images
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4 bg-gray-50/80 p-8 rounded-2xl w-full md:col-span-3 col-span-1">
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input
                type="text"
                id="phone_number"
                placeholder="Your Phone Number"
              />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="phone_number">Waste Type</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select your waste type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="platic">Plastic</SelectItem>
                  <SelectItem value="paper">Paper</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="metals">Metals</SelectItem>
                  <SelectItem value="glass">Glass</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="quantity">Quantity</Label>
              <Input type="text" id="quantity" placeholder="Waste quantity" />
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="quantity">Pick-up Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={rc(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-gray-500"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date as any}
                    onSelect={setDate as any}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5">
              <Label htmlFor="quantity">Additional Noted</Label>
              <Textarea placeholder="Additional noted to us maybe " />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <button className="text-yellow-50 px-4 py-1.5 rounded-3xl hover:bg-[#265F51]/90 hover:ring-1 transition-all duration-300 font-medium bg-[#265F51] h-fit flex gap-2 items-center w-full justify-center mt-4">
                  Pick Up My Waste
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Success</DialogTitle>
                  <DialogDescription className="">
                    Your waste has been successfully registered. Courier will be
                    at your location on the selected date.
                  </DialogDescription>
                  {/* <button
                    className={rc(
                      "w-full rounded-2xl p-4 flex gap-2 items-center justify-between",
                      isSelected ? "bg-gray-50" : "bg-white"
                    )}
                    onClick={() => setIsSelected(true)}
                  >
                    <label
                      htmlFor="ward"
                      className="flex gap-2 items-center font-medium"
                    >
                      <Image
                        src="/svg/color-logo.svg"
                        alt="logo"
                        width={20}
                        height={20}
                      />
                      <span>
                        $WARD{" "}
                        <span className="text-sm text-gray-600">
                          (Balance: 1000 $WARD)
                        </span>
                      </span>
                    </label>
                    <input
                      type="radio"
                      name="payment"
                      id="ward"
                      className="h-4 w-4 checked:bg-[#265F51] checked:border-[#265F51] checked:border"
                      checked={isSelected}
                    />
                  </button> */}

                  <DialogFooter>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <button className="text-yellow-50 px-4 py-1.5 rounded-3xl hover:bg-[#265F51]/90 hover:ring-1 transition-all duration-300 font-medium bg-[#265F51] h-fit flex gap-2 items-center w-full justify-center mt-4">
                          View Contribution History
                          <MoveRightIcon size={12} />
                        </button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader className="wrapper w-full">
                          <DrawerTitle>Contribution History</DrawerTitle>
                          <DrawerDescription>
                            Your contribution history will be shown here
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="wrapper w-full flex flex-col gap-4 h-80">
                          <div className="flex justify-between">
                            <div className="flex-1">
                              <p className="">27th August, 2024 - 10:00 AM</p>

                              <div className="flex gap-4 mt-4 flex-1">
                                <div className="w-24 h-24">
                                  <Image
                                    src="/dummy/know-plastic.jpg"
                                    alt="preview"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <p className="text-sm font-semibold">
                                    Plastic Waste
                                  </p>
                                  <p className="text-sm">Quantity: 10 kg</p>
                                  <p className="text-sm">Pick-up Date: -</p>
                                </div>
                              </div>
                            </div>
                            <div className="text-right pt-2">
                              <p className="text-sm font-semibold">Status</p>
                              <p className="text-sm text-yellow-500">Pending</p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <div className="flex-1">
                              <p className="">20th July, 2021 - 08:00 PM</p>

                              <div className="flex gap-4 mt-4 flex-1">
                                <div className="w-24 h-24">
                                  <Image
                                    src="/dummy/know-paper.jpg"
                                    alt="preview"
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="flex flex-col gap-1">
                                  <p className="text-sm font-semibold">
                                    Paper Waste
                                  </p>
                                  <p className="text-sm">Quantity: 5 kg</p>
                                  <p className="text-sm">
                                    Pick-up Date: 22th July 2021
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="text-right pt-2">
                              <p className="text-sm font-semibold">Status</p>
                              <p className="text-sm text-[#265F51]">Success</p>
                              <p className="text-sm text-[#265F51]">
                                (+100 $WARD)
                              </p>
                            </div>
                          </div>
                        </div>

                        <DrawerFooter className="wrapper w-full">
                          {/* <Button>Submit</Button> */}
                          <DrawerClose>
                            <Button variant="outline" className="w-full">
                              Close
                            </Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent>
                    </Drawer>
                  </DialogFooter>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContributeRegisterPage;
