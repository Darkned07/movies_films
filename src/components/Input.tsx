type inter = {
  labelName: string;
  type: string;
  placeholder: string;
};

function Input({ labelName, type, placeholder }: inter) {
  return (
    <label className="form-control w-full max-w-2xl">
      <div className="label">
        <span className="label-text">{labelName}</span>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-2xl"
      />
    </label>
  );
}

export default Input;
