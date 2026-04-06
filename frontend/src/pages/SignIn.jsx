import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router";
import { routePaths } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { SIGN_IN } from "@/utils/apiConstants";
import useApi from "@/hooks/useApi";

export default function SignIn() {
  const navigate = useNavigate();
  const { api } = useApi();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api({
        method: "POST",
        url: SIGN_IN,
        payload: data,
      });

      navigate(routePaths.ROOT);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...register("email", {
                        required: "Full name is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "Please provide valid email address!",
                        },
                      })}
                    />
                    <FieldDescription className="text-red-600">
                      {errors?.email?.message}
                    </FieldDescription>
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password required!",
                        min: {
                          value: 8,
                          message: "Password must be 8 characters long!",
                        },
                      })}
                    />
                    <FieldDescription className="text-red-600">
                      {errors?.password?.message}
                    </FieldDescription>
                  </Field>
                  <Field>
                    <Button type="submit">Login</Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account?{" "}
                      <span
                        className="cursor-pointer underline text-blue-400"
                        onClick={() => navigate(routePaths.SIGN_UP)}
                      >
                        Sign up
                      </span>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
