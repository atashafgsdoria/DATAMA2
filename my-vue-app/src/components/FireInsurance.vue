<template>
  <div class="section">
    <h2>Fire Insurance Application Form</h2>

    <div class="columns">
      <div class="column">
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" v-model="firstName" required />

        <label for="middle_name">Middle Name</label>
        <input type="text" id="middle_name" v-model="middleName" />

        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" v-model="lastName" required />

        <label for="birth_date">Date of Birth</label>
        <input type="date" id="birth_date" v-model="birthDate" :max="maxDate" required />

        <label for="phone_num">Mobile Number</label>
        <input type="text" id="phone_num" v-model="phoneNum" @input="validatePhoneNumber" maxlength="11" required />
      </div>

      <div class="column">
        <label for="tel_num_res">Telephone (Residential)</label>
        <input type="text" id="tel_num_res" v-model="telNumRes" @input="validateTelNumber" maxlength="10" />

        <label for="tel_num_off">Telephone (Office)</label>
        <input type="text" id="tel_num_off" v-model="telNumOff" @input="validateTelNumber" maxlength="10" />

        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="email" required />

        <label for="country">Country</label>
        <input type="text" id="country" v-model="country" @input="validateCountry" required />
      </div>
    </div>

    <div class="section">
      <h3>Property Information</h3>
      <label for="property_type">Property Type</label>
      <select id="property_type" v-model="propertyType" @change="toggleOtherField">
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="warehouse">Warehouse</option>
        <option value="industrial-factory">Industrial Factory</option>
        <option value="other">Other</option>
      </select>
      <input
        v-if="showOtherField"
        type="text"
        id="property_type-other"
        v-model="propertyOther"
        placeholder="Please specify"
      />
    </div>

    <div class="section">
      <h3>Insurance History</h3>
      <label for="policy-cancelled">Has your policy been canceled before?</label>
      <select id="policy-cancelled" v-model="policyCancelled" @change="toggleInput('policy-cancelled')">
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <input v-if="policyCancelled === 'yes'" type="text" id="policy-cancelled-info" v-model="cancelledReason" placeholder="Provide details" />

      <label for="risk-declined">Have you been declined for risk insurance?</label>
      <select id="risk-declined" v-model="riskDeclined" @change="toggleInput('risk-declined')">
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </select>
      <input v-if="riskDeclined === 'yes'" type="text" id="risk-declined-info" v-model="declinedReason" placeholder="Provide details" />
    </div>

    <button type="submit" @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';


// Form Fields
const firstName = ref('');
const middleName = ref('');
const lastName = ref('');
const birthDate = ref('');
const phoneNum = ref('');
const telNumRes = ref('');
const telNumOff = ref('');
const email = ref('');
const country = ref('');
const propertyType = ref('');
const propertyOther = ref('');
const policyCancelled = ref('');
const cancelledReason = ref('');
const riskDeclined = ref('');
const declinedReason = ref('');

// Maximum Date for Birthdate (Current Year)
const maxDate = computed(() => {
  const currentYear = new Date().getFullYear();
  return `${currentYear}-12-31`;
});

// Reactive property to show/hide "Other" field
const showOtherField = computed(() => {
  return propertyType.value === 'other' || propertyType.value === 'warehouse' || propertyType.value === 'industrial-factory';
});

// Input Validation
const validatePhoneNumber = () => {
  phoneNum.value = phoneNum.value.replace(/[^0-9]/g, '').slice(0, 11);
};

const validateTelNumber = (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(0, 10);
};

const validateCountry = () => {
  if (country.value.toLowerCase() !== 'philippines') {
    country.value = 'Philippines'; // Auto-correct
  }
};

// Toggle extra input fields based on selection
const toggleInput = (selectId) => {
  if (selectId === 'policy-cancelled') {
    cancelledReason.value = policyCancelled.value === 'yes' ? '' : null;
  } else if (selectId === 'risk-declined') {
    declinedReason.value = riskDeclined.value === 'yes' ? '' : null;
  }
};

// Form Submission
const submitForm = async () => {
  const { data, error } = await supabase.from('fire_insurance').insert([
    {
      first_name: firstName.value,
      middle_name: middleName.value,
      last_name: lastName.value,
      birth_date: birthDate.value,
      phone_num: phoneNum.value,
      tel_num_res: telNumRes.value,
      tel_num_off: telNumOff.value,
      email: email.value,
      country: country.value,
      property_type: propertyType.value,
      property_other: propertyOther.value,
      policy_cancelled: policyCancelled.value,
      cancelled_reason: cancelledReason.value,
      risk_declined: riskDeclined.value,
      declined_reason: declinedReason.value,
    },
  ]);

  if (error) {
    console.error('Submission Error:', error.message);
    alert('Error submitting form. Please try again.');
  } else {
    alert('Form submitted successfully!');
    resetForm();
  }
};

// Reset Form
const resetForm = () => {
  firstName.value = '';
  middleName.value = '';
  lastName.value = '';
  birthDate.value = '';
  phoneNum.value = '';
  telNumRes.value = '';
  telNumOff.value = '';
  email.value = '';
  country.value = '';
  propertyType.value = '';
  propertyOther.value = '';
  policyCancelled.value = '';
  cancelledReason.value = '';
  riskDeclined.value = '';
  declinedReason.value = '';
};

onMounted(() => {
  // Set max date for birthdate input
  birthDate.value = maxDate.value;
});
</script>


<style scoped>
/* General Section Styling */
.section {
  margin: 50px 5% 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

/* Typography */
h2 {
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

h3 {
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

p {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  color: #04097f;
}

/* Layout */
.columns {
  display: flex;
  gap: 20px;
}

.column {
  flex: 1;
}

.columns.other-information {
  flex-basis: 100%;
  margin-top: 20px;
}

/* Table Styling */
.section table {
  margin: 0 auto;
  border-collapse: collapse;
  width: 900px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.section th,
.section td {
  padding: 8px;
  border: 1px solid #ddd;
  text-align: left;
}

.section th {
  background-color: #f2f2f2;
}

/* Lists */
.section ul {
  list-style-type: disc;
  margin-left: 20px;
}

/* Input Fields */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

/* Input Placeholders */
input::placeholder {
  color: #aaa;
}

/* Input Focus Styles */
input:focus,
select:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
}

/* Error Input Styling */
input.error {
  border-color: red;
}

/* Remove Number Input Arrows */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Select Dropdown Styling */
select {
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") no-repeat right 10px center;
  padding-right: 30px;
}

/* Radio Buttons */
input[type="radio"] {
  margin-right: 5px;
  vertical-align: middle;
  font-family: Arial, Helvetica, sans-serif;
}

/* Required Fields (Red Asterisk) */
label[for]::after {
  content: " *";
  color: red;
}

/* Exceptions: No Asterisk for Optional Fields */
label[for="tel_num_res"]::after,
label[for="tel_num_off"]::after,
label[for="middle_name"]::after,
label[for="village_name"]::after,
label[for="condo_name"]::after {
  content: "";
}
</style>
