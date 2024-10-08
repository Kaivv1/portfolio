import Ninja from "@/components/Ninja";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { sendEmail } from "@/lib/mail";
import Heading from "@/typography/Heading";
import { motion } from "framer-motion";
import { Copy, CopyCheck, Loader, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export type ContactFormProps = {
  name: string;
  email: string;
  message: string;
};

const Contacts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedState, setCopiedState] = useState<{
    isCopiedPhone: boolean;
    isCopiedEmail: boolean;
  }>({
    isCopiedPhone: false,
    isCopiedEmail: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormProps>();
  const { toast } = useToast();
  const phone = "+359 884 323 727";
  const myEmail = "kvalchevv1@gmail.com";

  const handleCopyState = (
    key: "isCopiedPhone" | "isCopiedEmail",
    value: boolean
  ) => {
    setCopiedState((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit: SubmitHandler<ContactFormProps> = async (data) => {
    setIsLoading(true);
    await sendEmail(data)
      .then((res) => {
        toast({
          title: res.message,
          variant: "success",
        });
        setIsLoading(false);
        reset();
        return;
      })
      .catch((err: Error) => {
        toast({
          title: err.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      });
  };
  return (
    <main className="">
      <Ninja />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 3xl:gap-52">
        <div className="space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <Heading variant="h2" className="text-center md:text-start">
              Contacts<span className="text-primary">.</span>
            </Heading>
          </motion.div>
          <div className="md:space-y-10 space-y-8 flex flex-col items-center md:block relative">
            <motion.div
              className="flex items-center gap-3 md:gap-4 bg-transparent rounded-lg px-2 py-2 animate-move-shadows w-fit"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
            >
              <Phone className="stroke-primary size-6 md:size-7" />
              <span className="text-sm md:text-base">{phone}</span>
              <Button
                size="sm"
                onClick={() => {
                  handleCopyState("isCopiedPhone", true);
                  navigator.clipboard.writeText(phone);
                  toast({
                    title: "Phone number copied to clipboard",
                  });
                  setTimeout(() => {
                    handleCopyState("isCopiedPhone", false);
                  }, 1000);
                }}
              >
                {copiedState.isCopiedPhone ? (
                  <CopyCheck className="size-5 md:size-6" />
                ) : (
                  <Copy className="size-5 md:size-6" />
                )}
              </Button>
            </motion.div>
            <motion.div
              className="flex items-center gap-3 md:gap-4 bg-transparent rounded-lg px-2 py-2 animate-move-shadows w-fit"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
            >
              <Mail className="stroke-primary size-6 md:size-7" />
              <span className="text-sm md:text-base">{myEmail}</span>
              <Button
                size="sm"
                onClick={() => {
                  handleCopyState("isCopiedEmail", true);
                  navigator.clipboard.writeText(myEmail);
                  toast({
                    title: "Email copied to clipboard",
                  });
                  setTimeout(() => {
                    handleCopyState("isCopiedEmail", false);
                  }, 1000);
                }}
              >
                {copiedState.isCopiedEmail ? (
                  <CopyCheck className="size-5 md:size-6" />
                ) : (
                  <Copy className="size-5 md:size-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="space-y-2 xl:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
          >
            <Heading variant="h2" className="text-center">
              Send me an email<span className="text-primary">.</span>
            </Heading>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className=" space-y-4 shadow-sm border bg-background border-primary-hover shadow-primary md:p-6 p-4 rounded-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
          >
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="text-primary text-sm md:text-base"
                >
                  Name
                </label>
                {errors.message && (
                  <span className="text-red-600 font-semibold text-sm">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <Input
                id="name"
                type="text"
                {...register("name", {
                  required: "This field is required",
                  disabled: isLoading,
                })}
                placeholder="Enter you name"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="email"
                  className="text-primary text-sm md:text-base"
                >
                  Email
                </label>
                {errors.message && (
                  <span className="text-red-600 font-semibold text-sm">
                    {errors.email?.message}
                  </span>
                )}
              </div>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "This field is required",
                  disabled: isLoading,
                })}
                placeholder="Enter you email"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="message"
                  className="text-primary text-sm md:text-base"
                >
                  Message
                </label>
                {errors.message && (
                  <span className="text-red-600 font-semibold text-sm">
                    {errors.message?.message}
                  </span>
                )}
              </div>
              <Textarea
                rows={8}
                id="message"
                className="resize-none"
                {...register("message", {
                  required: "This field is required",
                  disabled: isLoading,
                })}
                placeholder="What's up"
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="gap-1 uppercase w-full"
            >
              {isLoading ? (
                <>
                  <span>Sending</span>
                  <Loader className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send</span>
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
