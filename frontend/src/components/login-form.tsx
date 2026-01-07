"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { loginAction } from "@/lib/actions/auth"; // Import the function we wrote
import { useState } from "react";
import { ok } from "assert"
import { useRouter } from "next/navigation"; // 2. Use useRouter instead of redirect

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
   const router = useRouter();
    const [error, setError] = useState<string | null>(null);
  
    async function handleTestLogin(formData: FormData) {
      setError(null); // Reset error
      const response = await loginAction(formData);

      if (response.success) {
        // 3. The cookie is already set by the server action!
        // We just need to tell the browser to go to the dashboard.
        router.push("/dashboard");
        router.refresh(); // Forces Next.js to re-check the cookies for the new page
      } else {
        setError(response.error || "Login failed");
      }
    }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleTestLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input 
                id="password" 
                name="password"
                type="password" 
                required 
                />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}


