import toast from "react-hot-toast";

interface log {
  email: string;
  name: string;
  role: string;
  id: string;
  password: string;
}

const userGetLogin = async (email: string, password: string) => {
  const fetchGetUsers = async () => {
    const req = await fetch("http://localhost:9999/users");
    const data = await req.json();
    return data;
  };
  const data = await fetchGetUsers();

  return data.find((e: log) => {
    if (email == e.email) {
      if (password == e.password) {
        return e;
      } else {
        toast.error("password xato qaytadan urunib koring!");
      }
    } else {
      toast.error(
        "emailni xato yozdingiz yoki bu email avval ro'yxatdan o'tmagan!"
      );
    }
  });
};

export { userGetLogin };
