import { TextInput, PasswordInput, Button, Text } from "@mantine/core";

export const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/images/liquor-bg.jpg"
          className="w-full h-full object-cover blur-[3px]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="border border-[#e95959] relative z-10 w-full max-w-md bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-6">
          {/* <img src="/images/logo.png" className="w-14 mb-2" /> */}
          <Text fw={700} size="xl" className="text-[#e95959]">
            Liquor Shop
          </Text>
        </div>

        <Text fw={600} size="lg" mb={4} className="text-[#e95959]">
          Login
        </Text>
        <Text size="sm" c="dimmed" mb="lg">
          Please enter your username and password to login
        </Text>

        {/* FORM */}
        <form className="space-y-4">
          <TextInput
            label="Username"
            withAsterisk
            placeholder="Enter your username"
          />

          <PasswordInput
            label="Password"
            withAsterisk
            placeholder="Enter your password"
          />

          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
