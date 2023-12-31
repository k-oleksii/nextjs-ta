// Core
import { ChangeEvent, FC, useState } from 'react';
import ReactInputMask from 'react-input-mask';

// Styles
import styles from './Field.module.scss';

interface IInputProps {
  placeholder?: string;
  id?: string;
  type?: string;
  name?: string;
  tag?: string;
  label?: string;
  mask?: string;
  onChange?: (fieldName: string, value: any) => void;
}

const Input: FC<IInputProps> = ({
  placeholder = '',
  id = '',
  type = 'text',
  name = '',
  tag = 'input',
  label = '',
  mask = '',
  onChange,
}: IInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (onChange) {
      onChange(name, value);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputElement =
    tag === 'phone' || mask ? (
      <ReactInputMask
        mask={String(mask)}
        id={id}
        maskChar=''
        className={styles.input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    ) : (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        id={id}
        className={styles.input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    );

  return (
    <div className={`${styles.field} ${isFocused ? styles.focused : ''}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.element}>{inputElement}</div>
    </div>
  );
};

export default Input;
