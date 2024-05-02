type inter = {
  labelName: string;
  type: string;
  placeholder: string;
  usrf?: any;
};

function Input({ labelName, type, placeholder, usrf }: inter) {
  return (
    <label className="form-control w-full max-w-2xl">
      <div className="label">
        <span className="label-text">{labelName}</span>
      </div>
      <input
        type={type}
        ref={usrf}
        placeholder={placeholder}
        className="input input-bordered w-full max-w-2xl"
      />
    </label>
  );
}

export default Input;
