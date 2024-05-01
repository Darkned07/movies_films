import Button from "@/components/Button";
import Input from "@/components/Input";

function LoginLay() {
  return (
    <div className="flex flex-col items-center my-[30px] p-2  sm:p-5">
      <h2 className="text-[20px] sm:text-2xl font-bold underline ">Login</h2>
      <form className="flex flex-col w-full sm:w-[500px] gap-5">
        <Input labelName="Email" type="email" placeholder="email writing..." />
        <Input
          labelName="Password"
          type="password"
          placeholder="password writing..."
        />
        <Button name="Login" cls="btn-outline link-hover" />
      </form>
    </div>
  );
}

export default LoginLay;
