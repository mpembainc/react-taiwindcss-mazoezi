import { toFormData } from 'axios';
import { useState } from 'react';

const About = () => {
  const [file, setFile] = useState<File | null>(null);

  const onSubmit = (formValues: any) => {
    //  const formData = new FormData();
    const formData = toFormData(formValues);
    if (file) formData.append('file', file);

    ///
  };

  return (
    <div>
      <p>About</p>

      <input
        type='file'
        onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
      />
    </div>
  );
};

export default About;
