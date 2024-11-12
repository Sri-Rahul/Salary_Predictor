//SalaryPredictor.tsx
import React, { useState } from 'react';
import {
  Container,
  Title,
  Stack,
  Select,
  NumberInput,
  Text,
  Button,
  Alert,
  Paper,
  Space,
  Checkbox,
  Group,
  ThemeIcon,
} from '@mantine/core';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';
import { IconCurrencyRupee } from '@tabler/icons-react';

interface ComboboxItem {
  value: string;
  label: string;
}

const GENDER_OPTIONS: ComboboxItem[] = [
  { value: 'm', label: 'Male' },
  { value: 'f', label: 'Female' },
];

const BOARD_OPTIONS: ComboboxItem[] = [
  { value: 'cbse', label: 'CBSE' },
  { value: 'icse', label: 'ICSE' },
  { value: 'state', label: 'State Board' },
];

const DEGREE_OPTIONS: ComboboxItem[] = [
  { value: 'B.Tech/B.E.', label: 'B.Tech/B.E.'},
  { value: 'M.Tech./M.E.', label: 'M.Tech./M.E.' },
  { value: 'MCA', label: 'MCA' },
  { value: 'M.Sc. (Tech.)', label: 'M.Sc. (Tech.)' },
];

// Updated SPECIALIZATION_OPTIONS with exact spelling and case
const SPECIALIZATION_OPTIONS: ComboboxItem[] = [
  { value: 'instrumentation and control engineering', label: 'Instrumentation and Control Engineering' },
  { value: 'computer science & engineering', label: 'Computer Science & Engineering' },
  { value: 'electronics & telecommunications', label: 'Electronics & Telecommunications' },
  { value: 'biotechnology', label: 'Biotechnology' },
  { value: 'mechanical engineering', label: 'Mechanical Engineering' },
  { value: 'information technology', label: 'Information Technology' },
  { value: 'electronics and communication engineering', label: 'Electronics and Communication Engineering' },
  { value: 'computer engineering', label: 'Computer Engineering' },
  { value: 'computer application', label: 'Computer Application' },
  { value: 'computer science and technology', label: 'Computer Science and Technology' },
  { value: 'electrical engineering', label: 'Electrical Engineering' },
  { value: 'automobile/automotive engineering', label: 'Automobile/Automotive Engineering' },
  { value: 'electronics and electrical engineering', label: 'Electronics and Electrical Engineering' },
  { value: 'information science engineering', label: 'Information Science Engineering' },
  { value: 'chemical engineering', label: 'Chemical Engineering' },
  { value: 'instrumentation engineering', label: 'Instrumentation Engineering' },
  { value: 'ceramic engineering', label: 'Ceramic Engineering' },
  { value: 'metallurgical engineering', label: 'Metallurgical Engineering' },
  { value: 'aeronautical engineering', label: 'Aeronautical Engineering' },
  { value: 'electronics engineering', label: 'Electronics Engineering' },
  { value: 'civil engineering', label: 'Civil Engineering' },
  { value: 'industrial & production engineering', label: 'Industrial & Production Engineering' },
  { value: 'electronics and computer engineering', label: 'Electronics and Computer Engineering' },
  { value: 'control and instrumentation engineering', label: 'Control and Instrumentation Engineering' },
  { value: 'mechanical & production engineering', label: 'Mechanical & Production Engineering' },
  { value: 'mechanical and automation', label: 'Mechanical and Automation' },
  { value: 'industrial & management engineering', label: 'Industrial & Management Engineering' },
  { value: 'biomedical engineering', label: 'Biomedical Engineering' },
  { value: 'electrical and power engineering', label: 'Electrical and Power Engineering' },
  { value: 'telecommunication engineering', label: 'Telecommunication Engineering' },
  { value: 'industrial engineering', label: 'Industrial Engineering' },
  { value: 'mechatronics', label: 'Mechatronics' },
  { value: 'embedded systems technology', label: 'Embedded Systems Technology' },
  { value: 'information & communication technology', label: 'Information & Communication Technology' },
  { value: 'information science', label: 'Information Science' },
];

// Add new college tier options
const COLLEGE_TIER_OPTIONS = [
  { value: '1', label: 'Tier 1' },
  { value: '2', label: 'Tier 2' },
  { value: '3', label: 'Tier 3' },
];

// Add the new college city tier options
const COLLEGE_CITY_TIER_OPTIONS = [
  { value: '0', label: 'Tier 2' },
  { value: '1', label: 'Tier 1' }
];

const DOMAIN_OPTIONS: ComboboxItem[] = [
  { value: '0', label: '0 - No proficiency' },
  { value: '0.25', label: '0.25' },
  { value: '0.5', label: '0.5' },
  { value: '0.75', label: '0.75' },
  { value: '1', label: '1 - Highly proficient' },
];

const STATE_OPTIONS: ComboboxItem[] = [
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
  { value: 'Maharashtra', label: 'Maharashtra' },
  { value: 'Tamil Nadu', label: 'Tamil Nadu' },
  { value: 'Punjab', label: 'Punjab' },
  { value: 'West Bengal', label: 'West Bengal' },
  { value: 'Telangana', label: 'Telangana' },
  { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
  { value: 'Haryana', label: 'Haryana' },
  { value: 'Karnataka', label: 'Karnataka' },
  { value: 'Orissa', label: 'Orissa' },
  { value: 'Chhattisgarh', label: 'Chhattisgarh' },
  { value: 'Rajasthan', label: 'Rajasthan' },
  { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
  { value: 'Uttarakhand', label: 'Uttarakhand' },
  { value: 'Gujarat', label: 'Gujarat' },
  { value: 'Jharkhand', label: 'Jharkhand' },
  { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
  { value: 'Bihar', label: 'Bihar' },
  { value: 'Union Territory', label: 'Union Territory' },
  { value: 'Jammu and Kashmir', label: 'Jammu and Kashmir' },
  { value: 'Kerala', label: 'Kerala' },
  { value: 'Assam', label: 'Assam' },
  { value: 'Sikkim', label: 'Sikkim' },
  { value: 'Meghalaya', label: 'Meghalaya' },
  { value: 'Goa', label: 'Goa' },
];

const SpecificSkill = ({
  label,
  setterExperience,
  setterRating,
  currentExperience,
  currentRating,
}: {
  label: string;
  setterExperience: React.Dispatch<React.SetStateAction<boolean>>;
  setterRating: React.Dispatch<React.SetStateAction<number | null>>;
  currentExperience: boolean;
  currentRating: number | null;
}) => (
  <div>
    <Select
      label={`Do you have experience in ${label}?`}
      placeholder="Select option"
      data={[
        { value: 'yes', label: 'Yes' },
        { value: 'no', label: 'No' },
      ]}
      value={currentExperience ? 'yes' : 'no'}
      onChange={(value) => setterExperience(value === 'yes')}
      required
      styles={{
        root: { width: '100%' },
        label: { marginBottom: '0.5rem' },
        input: { 
          height: '2.5rem',
          '&:focus': {
            borderColor: 'var(--mantine-color-blue-6)',
          },
        },
      }}
    />
    {currentExperience && (
      <Select
        label={`Rate your ${label} skills`}
        placeholder="Rate your skills (1-5)"
        data={[
          { value: '1', label: '1 - Beginner' },
          { value: '2', label: '2 - Basic' },
          { value: '3', label: '3 - Intermediate' },
          { value: '4', label: '4 - Advanced' },
          { value: '5', label: '5 - Expert' },
        ]}
        value={currentRating !== null ? currentRating.toString() : ''}
        onChange={(value) => setterRating(value ? parseInt(value) : null)}
        required
        styles={{
          root: { width: '100%' },
          label: { marginBottom: '0.5rem' },
          input: { 
            height: '2.5rem',
            '&:focus': {
              borderColor: 'var(--mantine-color-blue-6)',
            },
          },
        }}
      />
    )}
  </div>
);

const getDomainValue = (rating: number | null): number => {
  switch (rating) {
    case 1:
      return 0.23780284; // Beginner
    case 2:
      return 0.338786347; // Basic
    case 3:
      return 0.635978756; // Intermediate
    case 4:
      return 0.824666401; // Advanced
    case 5:
      return 0.999910408; // Expert
    default:
      return -1; // If nothing is chosen
  }
};

const SalaryPredictor = () => {
  const [gender, setGender] = useState<string>('');
  const [board10, setBoard10] = useState<string>('');
  const [board12, setBoard12] = useState<string>('');
  const [percentage10, setPercentage10] = useState<number | undefined>(undefined);
  const [percentage12, setPercentage12] = useState<number | undefined>(undefined);
  const [degree, setDegree] = useState<string>('');
  const [specialization, setSpecialization] = useState<string>('');
  const [collegeGPA, setCollegeGPA] = useState<number | undefined>(undefined);
  const [collegeTier, setCollegeTier] = useState<string>('');
  const [collegeCityTier, setCollegeCityTier] = useState<string>('');
  const [collegeState, setCollegeState] = useState<string>('');
  const [graduationYear, setGraduationYear] = useState<number | undefined>(undefined);

  // Domain
  const [rating, setRating] = useState<number | null>(null);

  // Specific Skills
  const [experience, setExperience] = useState<string[]>([]);

  const handleExperienceChange = (value: string[]) => {
    setExperience(value);
  };

  // Required Features
  const [englishRating, setEnglishRating] = useState<number | null>(null);
  const [logicalRating, setLogicalRating] = useState<number | null>(null);
  const [quantRating, setQuantRating] = useState<number | null>(null);
  const [conscientiousnessRating, setConscientiousnessRating] = useState<number | null>(null);
  const [agreeablenessRating, setAgreeablenessRating] = useState<number | null>(null);
  const [extraversionRating, setExtraversionRating] = useState<number | null>(null);
  const [neuroticismRating, setNeuroticismRating] = useState<number | null>(null);
  const [opennessToExperienceRating, setOpennessToExperienceRating] = useState<number | null>(null);

  const [prediction, setPrediction] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Add the new mapRatingToOriginalScale function

  // Update the mapRatingToOriginalScale function definition
const mapRatingToOriginalScale = (rating: number | null, minVal: number, maxVal: number): number | null => {
  if (!rating) return null;
  return Math.round(minVal + ((maxVal - minVal) * (rating - 1)) / 4);
};

  // Existing imports remain the same...

const handleSubmit = async () => {
  setLoading(true);
  setError(null);
  setPrediction(null);

  try {
    // Map ratings to their original scales
    const englishScaled = englishRating ? mapRatingToOriginalScale(englishRating, 180, 875) : null;
    const logicalScaled = logicalRating ? mapRatingToOriginalScale(logicalRating, 195, 795) : null;
    const quantScaled = quantRating ? mapRatingToOriginalScale(quantRating, 120, 900) : null;
    const computerProgrammingScaled = experience.includes('Computer Programming') ? mapRatingToOriginalScale(rating, -1, 804) : -1;
    const electronicsScaled = experience.includes('Electronics and Semiconductors') ? mapRatingToOriginalScale(rating, -1, 612) : -1;
    const computerScienceScaled = experience.includes('Computer Science') ? mapRatingToOriginalScale(rating, -1, 715) : -1;
    const mechanicalScaled = experience.includes('Mechanical Engineering') ? mapRatingToOriginalScale(rating, -1, 623) : -1;
    const electricalScaled = experience.includes('Electrical Engineering') ? mapRatingToOriginalScale(rating, -1, 660) : -1;
    const telecomScaled = experience.includes('Telecom Engineering') ? mapRatingToOriginalScale(rating, -1, 548) : -1;
    const civilScaled = experience.includes('Civil Engineering') ? mapRatingToOriginalScale(rating, -1, 500) : -1;

    // Map personality traits with null checks
    const conscientiousnessScaled = conscientiousnessRating ? mapRatingToOriginalScale(conscientiousnessRating, -3.8933, 1.9953) : null;
    const agreeablenessScaled = agreeablenessRating ? mapRatingToOriginalScale(agreeablenessRating, -5.7816, 1.9048) : null;
    const extraversionScaled = extraversionRating ? mapRatingToOriginalScale(extraversionRating, -4.6009, 2.1617) : null;
    const neuroticismScaled = neuroticismRating ? mapRatingToOriginalScale(neuroticismRating, -2.643, 3.3525) : null;
    const opennessScaled = opennessToExperienceRating ? mapRatingToOriginalScale(opennessToExperienceRating, -7.3757, 1.6302) : null;

    const payload = {
      Gender: gender,
      "10percentage": percentage10,
      "10board": board10,
      "12percentage": percentage12,
      "12board": board12,
      collegeGPA: collegeGPA,
      GraduationYear: graduationYear,
      Degree: degree,
      Specialization: specialization,
      CollegeTier: parseInt(collegeTier),
      CollegeCityTier: parseInt(collegeCityTier),
      CollegeState: collegeState,
      Domain: getDomainValue(rating),
      English: englishScaled,
      Logical: logicalScaled,
      Quant: quantScaled,
      ComputerProgramming: computerProgrammingScaled,
      ElectronicsAndSemicon: electronicsScaled,
      ComputerScience: computerScienceScaled,
      MechanicalEngg: mechanicalScaled,
      ElectricalEngg: electricalScaled,
      TelecomEngg: telecomScaled,
      CivilEngg: civilScaled,
      conscientiousness: conscientiousnessScaled,
      agreeableness: agreeablenessScaled,
      extraversion: extraversionScaled,
      nueroticism: neuroticismScaled,
      openess_to_experience: opennessScaled
    };

    // Validation for required fields
    const requiredFields = Object.entries(payload);
    const missingFields = requiredFields.filter(([_, value]) => 
      value === null || value === undefined || value === ''
    );

    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.map(([key]) => key).join(', ')}`);
      setLoading(false);
      return;
    }

    const predictUrl = process.env.NEXT_PUBLIC_PREDICT_URL;

    if (!predictUrl) {
      setError('Prediction URL is not defined.');
      setLoading(false);
      return;
    }

    const response = await axios.post(
      predictUrl,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.data.success) {
      setPrediction(response.data.prediction);
    } else {
      setError(response.data.error || 'Prediction failed');
    }
  } catch (err) {
    console.error('API Error:', err);
    setError((err as any).response?.data?.error || 'Failed to get prediction. Please try again.');
  } finally {
    setLoading(false);
  }
};

  const selectStyles = {
    root: { width: '100%' },
    label: { marginBottom: '0.5rem' },
    input: { 
      height: '2.5rem',
      '&:focus': {
        borderColor: 'var(--mantine-color-blue-6)',
      },
    },
  };

  // Updated numberInputStyles without color overrides
  const numberInputStyles = {
    root: { width: '100%' },
    label: { marginBottom: '0.5rem' },
    input: { 
      height: '2.5rem',
      '&:focus': {
        borderColor: 'var(--mantine-color-blue-6)',
      },
    },
  };

  // Add this where your other state variables are defined
const ratingOptions = [
  { value: '1', label: 'Beginner' },
  { value: '2', label: 'Basic' },
  { value: '3', label: 'Intermediate' },
  { value: '4', label: 'Advanced' },
  { value: '5', label: 'Expert' }
];

  return (
    <Container size="lg" py="xl">
      <Title order={2}>Salary Predictor</Title>
      <Space h="md" />
      <Paper withBorder p="md">
        <Stack gap="md">
          <Select
            label="Gender"
            placeholder="Select gender"
            data={GENDER_OPTIONS}
            value={gender}
            onChange={(value) => setGender(value || '')}
            required
            styles={selectStyles}
          />
          <Select
            label="10th Board"
            placeholder="Select 10th board"
            data={BOARD_OPTIONS}
            value={board10}
            onChange={(value) => setBoard10(value || '')}
            required
            styles={selectStyles}
          />
          <Select
            label="12th Board"
            placeholder="Select 12th board"
            data={BOARD_OPTIONS}
            value={board12}
            onChange={(value) => setBoard12(value || '')}
            required
            styles={selectStyles}
          />
          <NumberInput
            label="10th Percentage"
            placeholder="Enter 10th percentage"
            value={percentage10}
            onChange={(value) => setPercentage10(value === undefined ? undefined : Number(value))}
            min={0}
            max={100}
            required
            styles={numberInputStyles}
          />
          <NumberInput
            label="12th Percentage"
            placeholder="Enter 12th percentage"
            value={percentage12}
            onChange={(value) => setPercentage12(value === undefined ? undefined : Number(value))}
            min={0}
            max={100}
            required
            styles={numberInputStyles}
          />
          <Select
            label="Degree"
            placeholder="Select degree"
            data={DEGREE_OPTIONS}
            value={degree}
            onChange={(value) => setDegree(value || '')}
            required
            styles={selectStyles}
          />
          <Select
            label="Specialization"
            placeholder="Select specialization"
            data={SPECIALIZATION_OPTIONS}
            value={specialization}
            onChange={(value) => setSpecialization(value || '')}
            required
            styles={selectStyles}
          />
          <NumberInput
            label="College GPA"
            placeholder="Enter college GPA"
            value={collegeGPA}
            onChange={(value) => setCollegeGPA(value === undefined ? undefined : Number(value))}
            min={0}
            max={10}
            required
            styles={numberInputStyles}
          />
          <Select
            label="College Tier"
            placeholder="Select college tier"
            data={COLLEGE_TIER_OPTIONS}
            value={collegeTier}
            onChange={(value) => setCollegeTier(value || '')}
            required
            styles={selectStyles}
          />
          <Select
            label="College City Tier"
            placeholder="Select college city tier"
            data={COLLEGE_CITY_TIER_OPTIONS}
            value={collegeCityTier}
            onChange={(value) => setCollegeCityTier(value || '')}
            required
            styles={selectStyles}
          />
          <Select
            label="College State"
            placeholder="Select college state"
            data={STATE_OPTIONS}
            value={collegeState}
            onChange={(value) => setCollegeState(value || '')}
            required
            styles={selectStyles}
          />
          <NumberInput
            label="Graduation Year"
            placeholder="Enter graduation year"
            value={graduationYear}
            onChange={(value) => setGraduationYear(value === undefined ? undefined : Number(value))}
            min={1980}
            max={new Date().getFullYear()}
            required
            styles={numberInputStyles}
          />

          {/* Specific Skills Inputs */}
          <Checkbox.Group
            label="Do you have experience in:"  
            value={experience}
            onChange={handleExperienceChange}
            required
          >
            <Stack gap="md">
              <Checkbox value="Computer Programming" label="Computer Programming" />
              <Checkbox value="Electronics and Semiconductors" label="Electronics and Semiconductors" />
              <Checkbox value="Computer Science" label="Computer Science" />
              <Checkbox value="Mechanical Engineering" label="Mechanical Engineering" />
              <Checkbox value="Electrical Engineering" label="Electrical Engineering" />
              <Checkbox value="Telecom Engineering" label="Telecom Engineering" />
              <Checkbox value="Civil Engineering" label="Civil Engineering" />
            </Stack>
          </Checkbox.Group>

          {/* Rating Input - Only shown when experience is selected */}
          {experience.length > 0 && (
            <Select
              label="Select your level"
              placeholder="Choose your expertise level"
              data={ratingOptions}
              value={rating?.toString()}
              onChange={(value) => setRating(value ? parseInt(value) : null)}
              required
              styles={{
                root: { width: '100%' },
                label: { marginBottom: '0.5rem' },
                input: {
                  height: '2.5rem',
                  '&:focus': {
                    borderColor: 'var(--mantine-color-blue-6)',
                  },
                },
              }}
            />
          )}

          {/* Missing Required Features Inputs */}
          <Select
            label="Rate your English skills"
            placeholder="Rate your English skills (1-5)"
            data={[
              { value: '1', label: '1 - Beginner' },
              { value: '2', label: '2 - Basic' },
              { value: '3', label: '3 - Intermediate' },
              { value: '4', label: '4 - Advanced' },
              { value: '5', label: '5 - Expert' },
            ]}
            value={englishRating !== null ? englishRating.toString() : ''}
            onChange={(value) => setEnglishRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="Rate your Logical Reasoning skills"
            placeholder="Rate your Logical Reasoning skills (1-5)"
            data={[
              { value: '1', label: '1 - Beginner' },
              { value: '2', label: '2 - Basic' },
              { value: '3', label: '3 - Intermediate' },
              { value: '4', label: '4 - Advanced' },
              { value: '5', label: '5 - Expert' },
            ]}
            value={logicalRating !== null ? logicalRating.toString() : ''}
            onChange={(value) => setLogicalRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="Rate your Quant skills"
            placeholder="Rate your Quant skills (1-5)"
            data={[
              { value: '1', label: '1 - Beginner' },
              { value: '2', label: '2 - Basic' },
              { value: '3', label: '3 - Intermediate' },
              { value: '4', label: '4 - Advanced' },
              { value: '5', label: '5 - Expert' },
            ]}
            value={quantRating !== null ? quantRating.toString() : ''}
            onChange={(value) => setQuantRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="On a scale of 1 to 5, how much do you agree with the statement: I consistently set high standards for myself and ensure my work is thoroughly checked before completion."
            placeholder="(1-5)"
            data={[
              { value: '1', label: '1 - Strongly Disagree' },
              { value: '2', label: '2 - Disagree' },
              { value: '3', label: '3 - Neutral' },
              { value: '4', label: '4 - Agree' },
              { value: '5', label: '5 - Strongly Agree' },
            ]}
            value={conscientiousnessRating !== null ? conscientiousnessRating.toString() : ''}
            onChange={(value) => setConscientiousnessRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="I prioritize maintaining harmonious relationships and often seek ways to help my colleagues succeed."
            placeholder="Rate your Agreeableness (1-5)"
            data={[
              { value: '1', label: '1 - Strongly Disagree' },
              { value: '2', label: '2 - Disagree' },
              { value: '3', label: '3 - Neutral' },
              { value: '4', label: '4 - Agree' },
              { value: '5', label: '5 - Strongly Agree' },
            ]}
            value={agreeablenessRating !== null ? agreeablenessRating.toString() : ''}
            onChange={(value) => setAgreeablenessRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="I thrive in social situations and enjoy taking the lead in group discussions or presentations."
            placeholder="(1-5)"
            data={[
              { value: '1', label: '1 - Strongly Disagree' },
              { value: '2', label: '2 - Disagree' },
              { value: '3', label: '3 - Neutral' },
              { value: '4', label: '4 - Agree' },
              { value: '5', label: '5 - Strongly Agree' },
            ]}
            value={extraversionRating !== null ? extraversionRating.toString() : ''}
            onChange={(value) => setExtraversionRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="I often find myself concerned about potential challenges and tend to analyze situations deeply before acting."
            placeholder="Rate your Neuroticism (1-5)"
            data={[
              { value: '1', label: '1 - Strongly Disagree' },
              { value: '2', label: '2 - Disagree' },
              { value: '3', label: '3 - Neutral' },
              { value: '4', label: '4 - Agree' },
              { value: '5', label: '5 - Strongly Agree' },
            ]}
            value={neuroticismRating !== null ? neuroticismRating.toString() : ''}
            onChange={(value) => setNeuroticismRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />
          <Select
            label="I actively seek out new learning opportunities and enjoy exploring unconventional approaches to problem-solving."
            placeholder="Rate your Openness to Experience (1-5)"
            data={[
              { value: '1', label: '1 - Strongly Disagree' },
              { value: '2', label: '2 - Disagree' },
              { value: '3', label: '3 - Neutral' },
              { value: '4', label: '4 - Agree' },
              { value: '5', label: '5 - Strongly Agree' },
            ]}
            value={opennessToExperienceRating !== null ? opennessToExperienceRating.toString() : ''}
            onChange={(value) => setOpennessToExperienceRating(value ? parseInt(value) : null)}
            required
            styles={selectStyles}
          />

          {error && (
            <Alert icon={<AlertCircle size={16} />} title="Error" color="red">
              {error}
            </Alert>
          )}
          {typeof prediction === 'number' && (
            <SalaryPredictionCard predictedSalary={prediction} />
          )}
          <Button onClick={handleSubmit} loading={loading}>
            Predict Salary
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
};

const SalaryPredictionCard = ({ predictedSalary }: { predictedSalary: number }) => {
  const formatSalary = (salary: string | number | bigint) => {
    const numericSalary = typeof salary === 'string' ? parseFloat(salary) : Number(salary);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(numericSalary);
  };

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      withBorder
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.dark[7], // Changed to dark theme color
          transition: 'transform 0.2s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
          maxWidth: '400px',
          margin: '20px auto',
          padding: '20px', // Added padding for better spacing
          borderRadius: theme.radius.md, // Optional: adds rounded corners
          color: theme.colors.gray[0], // Makes text light colored for dark background
        }
      })}
    >
      <Group justify="apart" mb="xs">
        <Text fw={500} size="lg">
          Predicted Annual Salary
        </Text>
        <ThemeIcon size={40} radius="md" color="blue">
          <IconCurrencyRupee size={24} />
        </ThemeIcon>
      </Group>

      <Text
        size="xl"
        fw={700}
        styles={(theme) => ({
          root: {
            color: theme.colors.blue[9],
            fontSize: '2rem',
            textAlign: 'center',
            padding: '20px 0',
          }
        })}
      >
        {formatSalary(predictedSalary)}
      </Text>

      <Text size="sm" color="dimmed" mt="md">
        * This prediction is based on the provided parameters and historical data
      </Text>
    </Paper>
  );
};

export default SalaryPredictor;