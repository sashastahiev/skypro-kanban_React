const BaseInput = ({
   tag,
   id,
   name,
   placeholder = "",
   type = "text",
   error = false,
   onChange,

}) => {
   const Component = tag;
   return (
      <Component
         id={id}
         name={name}
         type={type}
         placeholder={placeholder}
         $error={error}
         onChange={onChange}
      />
   );
};

export default BaseInput;