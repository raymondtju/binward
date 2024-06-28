"use client";

import React from "react";
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
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { rc } from "../../../../utils/css";
import { Calendar } from "../../../../components/calendar";
import { Textarea } from "../../../../components/textarea";

function ContributeRegisterPage() {
  const [date, setDate] = React.useState<Date>();

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

        <div className="mt-8 space-y-4 bg-gray-50/80 p-8 rounded-2xl max-w-sm">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Your Name" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              type="text"
              id="phone_number"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="quantity">Quantity</Label>
            <Input type="text" id="quantity" placeholder="Waste quantity" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
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
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="quantity">Additional Noted</Label>
            <Textarea placeholder="Additional noted to us maybe " />
          </div>
          <button className="text-yellow-50 px-4 py-1.5 rounded-3xl hover:bg-[#265F51]/90 hover:ring-1 transition-all duration-300 font-medium bg-[#265F51] h-fit flex gap-2 items-center w-full justify-center mt-4">
            Pick Up My Waste
          </button>
        </div>
      </section>
    </main>
  );
}

export default ContributeRegisterPage;
