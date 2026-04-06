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
import { routePaths } from "@/utils/constants";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import useApi from "@/hooks/useApi";
import { SIGN_UP } from "@/utils/apiConstants";

export function SignUp() {
  const navigate = useNavigate();
  const { api } = useApi();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      const response = await api({
        method: "POST",
        url: SIGN_UP,
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
        <Card>
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
              Enter your information below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="name">Full Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    {...register("fullName", {
                      required: "Full name is required",
                      maxLength: {
                        value: 50,
                        message: "The name can not be more than 50 latters!",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="text-red-600">{errors.fullName.message}</p>
                  )}
                </Field>
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
                  {errors.email && (
                    <p className="text-red-600">{errors.email.message}</p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
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
                  <FieldLabel htmlFor="confirm-password">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    id="confirm-password"
                    type="password"
                    {...register("confirmPassword", {
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <FieldDescription className="text-red-600">
                    {errors?.confirmPassword?.message}
                  </FieldDescription>
                </Field>
                <FieldGroup>
                  <Field>
                    <Button type="submit">Create Account</Button>
                    <FieldDescription
                      className="px-6 text-center"
                      onClick={() => navigate(routePaths.SIGN_IN)}
                    >
                      Already have an account?{" "}
                      <span className="cursor-pointer underline text-blue-400">
                        Sign in
                      </span>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </FieldGroup>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
