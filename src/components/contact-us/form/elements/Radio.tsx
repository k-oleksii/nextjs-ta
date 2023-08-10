import { ChangeEvent, FC, useState } from 'react';
import styles from './Field.module.scss';

interface RadioProps {
  caption?: string;
  name: string;
  options: { id: string; label: string; value: string }[];
  onChange?: (selectedValue: { [key: string]: string }) => void;
}

const Radio: FC<RadioProps> = ({
  caption,
  name,
  options,
  onChange,
}: RadioProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange({ [name]: value });
    }
  };

  const radioElements = options.map(option => (
    <div className={styles.radio} key={option.id}>
      <label>
        <input
          type='radio'
          className={styles.radioInput}
          name={name}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={handleOptionChange}
        />
        <span className={styles.indicator} />
        <span className={styles.label}>{option.label}</span>
      </label>
    </div>
  ));

  return (
    <div className={styles.field}>
      {caption && <span>{caption}</span>}
      <div className={styles.group}>{radioElements}</div>
    </div>
  );
};

export default Radio;
