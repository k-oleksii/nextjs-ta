import { ChangeEvent, FC } from 'react';
import ReactInputMask from 'react-input-mask';
import styles from './Field.module.scss';

interface InputProps {
  placeholder?: string;
  id?: string;
  type?: string;
  name?: string;
  tag?: string;
  label?: string;
  mask?: string;
  onChange?: (fieldName: string, value: any) => void;
}

const Input: FC<InputProps> = ({
  placeholder = '',
  id = '',
  type = 'text',
  name = '',
  tag = 'input',
  label = '',
  mask = '',
  onChange,
}: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(name, value);
    }
  };

  const inputElement =
    tag === 'phone' || mask ? (
      <ReactInputMask
        mask={String(mask)}
        id={id}
        maskChar=''
        className={styles.input}
        onChange={handleChange}
      />
    ) : (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        id={id}
        className={styles.input}
        onChange={handleChange}
      />
    );

  return (
    <div className={styles.field}>
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
