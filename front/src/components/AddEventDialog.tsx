import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/components/useToast";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/Dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/Input";
import { createEvent } from "@/lib/api";
import { Button } from "@/components/Button";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { SocketIoContext } from "@/lib/socket";

type FormValues = {
  name: string;
  description: string;
  location: string;
  startTime: Date;
  endTime: Date;
};

export const AddEventDialog: FC = () => {
  const socket = useContext(SocketIoContext)
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      description: "",
      location: "",
      startTime: new Date(),
      endTime: new Date(),
    },
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [startTIme, setStartTime] = useState(new Date());
  const submitHandler = async (data: FormValues) => {
    try {
      data = { ...data, ...{ paymentMethods: [{ type: "cash" }] } };
      console.log("Form data: ", data);
      const response = await createEvent(data);
      console.log(JSON.stringify(response.data));
      toast({
        title: "Successfully added",
      });
      setOpen(false);
      reset();
      socket.emit('EventAdded')
    } catch (error) {
      toast({
        title: "Failed to add",
        description: `${error?.message}`,
        variant: "destructive",
      });
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>Add item</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <form noValidate onSubmit={handleSubmit(submitHandler)}>
          <DialogHeader>
            <DialogTitle>New Item</DialogTitle>
            <DialogDescription>Add new item to inventory</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" {...register("name")} />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                {...register("description")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Location
              </Label>
              <Input
                type="string"
                id="location"
                className="col-span-3"
                {...register("location")}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="purchaseDate" className="text-right">
                Start date:
              </Label>
              <Input
                type="date"
                id="startTime"
                className="col-span-3"
                {...register("startTime", {
                  valueAsDate: true,
                })}
              />
              {/* <Controller
                control={control}
                name="startTime"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <DateTimePicker
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    selected={value}
                    onClose={() => console.log('closing')}
                  />
                )}
              /> */}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="purchaseDate" className="text-right">
                End date:
              </Label>
              <Input
                type="date"
                id="endTime"
                className="col-span-3"
                {...register("endTime", {
                  valueAsDate: true,
                })}
              />
            </div>
          </div>
          <DialogFooter>
            <button type="submit">Create event</button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
