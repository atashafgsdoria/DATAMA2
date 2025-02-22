<template>
  <div>
      <form @submit.prevent="handleSubmit">
          <div class="section">
              <h2>Client's Information</h2>
              <div class="columns">
                <div class="column">
                  <label for="last_name">Last Name:</label>
                  <input type="text" id="last_name" v-model="form.last_name" placeholder="Dela Cruz" required />
        
                  <label for="given_name">Given Name:</label>
                  <input type="text" id="given_name" v-model="form.given_name" placeholder="Juan" required />
        
                  <label for="middle_name">Middle Name:</label>
                  <input type="text" id="middle_name" v-model="form.middle_name" placeholder="Cruz" />
        
                  <label for="dob">Date of Birth:</label>
                  <input type="date" id="dob" v-model="form.dob" required />
        
                  <label>Client's Interest on Property:</label>
                  <label><input type="radio" v-model="form.interest_on_property" value="owner" required /> Owner</label>
                  <label><input type="radio" v-model="form.interest_on_property" value="lessee" /> Lessee</label>
                  <label><input type="radio" v-model="form.interest_on_property" value="mortgagee" /> Mortgagee</label>
                  <label><input type="radio" v-model="form.interest_on_property" value="others" /> Others</label>
                </div>
        
                <div class="column">
                  <label for="phone_num">Mobile No.:</label>
                  <input type="number" id="phone_num" v-model="form.phone_num" placeholder="09000000000" pattern="[0-9]{11}" required />
        
                  <label for="email_add">Email Address:</label>
                  <input type="email" id="email_add" v-model="form.email_add" placeholder="juandelacruz@domain.com" required />
        
                  <label for="mailing_address">Mailing Address:</label>
                  <input type="text" id="mailing_address" v-model="form.mailing_address" placeholder="3 Humabon, Makati" required />
        
                  <label for="tel_num_res">Telephone No. (Residential):</label>
                  <input type="number" id="tel_num_res" v-model="form.tel_num_res" placeholder="0288529232" pattern="[0-9]{0,10}" />
        
                  <label for="tel_num_off">Telephone No. (Office):</label>
                  <input type="number" id="tel_num_off" v-model="form.tel_num_off" placeholder="0288529232" pattern="[0-9]{0,10}" />
                </div>
              </div>
          </div>

          <div class="section">
              <h2>Property Information</h2>
              <div class="columns">
                <div class="column">
                  <label for="address">House No./Street/Purok/Subdivision:</label>
                  <input type="text" id="address" v-model="form.address" placeholder="3 Humabon, Makati, 1232 Kalakhang Maynila" required />
          
                  <label for="region">Region:</label>
                  <input type="text" id="region" v-model="form.region" placeholder="National Capital Region (NCR)" required />
          
                  <label for="province">Province:</label>
                  <input type="text" id="province" v-model="form.province" placeholder="NCR, Fourth District" required />
                </div>
          
                <div class="column">
                  <label for="city">City/Municipality:</label>
                  <input type="text" id="city" v-model="form.city" placeholder="Makati City" required />
          
                  <label for="barangay">Barangay:</label>
                  <input type="text" id="barangay" v-model="form.barangay" placeholder="Magallanes" required />
          
                  <label for="village_name">Village Name:</label>
                  <input type="text" id="village_name" v-model="form.village_name" placeholder="Paseo de Magallanes" />
          
                  <label for="condo_name">Condo Name:</label>
                  <input type="text" id="condo_name" v-model="form.condo_name" placeholder="Galeria de Magallanes" />
                </div>
              </div>
          </div>
          <div class="section">
              <h2>Properties to be Covered</h2>
              <p>Enter 0 if not applicable.</p>
              <div class="columns">
                <div class="column">
                  <label for="building-improvements">Building Improvements:</label>
                  <input type="number" id="building-improvements" v-model="form.building_improvements" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="household-contents">Household Contents:</label>
                  <input type="number" id="household-contents" v-model="form.household_contents" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="swimming-pool">Swimming Pool:</label>
                  <input type="number" id="swimming-pool" v-model="form.swimming_pool" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="gazebo">Gazebo:</label>
                  <input type="number" id="gazebo" v-model="form.gazebo" placeholder="Estimated Amount" min="0" step="0.01" />
                </div>
          
                <div class="column">
                  <label for="water-tank">Water Tank:</label>
                  <input type="number" id="water-tank" v-model="form.water_tank" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="pump-house">Pump House:</label>
                  <input type="number" id="pump-house" v-model="form.pump_house" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="dirty-kitchen">Dirty Kitchen:</label>
                  <input type="number" id="dirty-kitchen" v-model="form.dirty_kitchen" placeholder="Estimated Amount" min="0" step="0.01" />
          
                  <label for="concrete-fence">Concrete Fence:</label>
                  <input type="number" id="concrete-fence" v-model="form.concrete_fence" placeholder="Estimated Amount" min="0" step="0.01" />
                </div>
              </div>
          </div>
          <div class="section">
            <h2>Property Description</h2>
            <p>Enter 0 if not applicable.</p>
            <div class="columns">
              <div class="column">
                <label for="no-of-storey">No. of Storey:</label>
                <input type="number" id="no-of-storey" v-model="form.noOfStorey" min="1" required />

                <label for="year-built">Year Built:</label>
                <input type="number" id="year-built" v-model="form.yearBuilt" max="2025" required />

                <label for="floor-area">Floor Area (sq. meters):</label>
                <input type="number" id="floor-area" v-model="form.floorArea" min="1" required />

                <label for="roofing">Roofing:</label>
                <select id="roofing" v-model="form.roofing">
                  <option value="galvanized-iron">Galvanized Iron</option>
                  <option value="asbestos">Asbestos</option>
                  <option value="brick">Brick</option>
                  <option value="concrete">Concrete</option>
                  <option value="other">Other (please specify)</option>
                </select>
                <input v-if="form.roofing === 'other'" type="text" v-model="form.roofingOther" placeholder="Specify if other" />
              </div>

              <div class="column other-information">
                <label><b>Boundaries:</b></label><br>
                <div class="column">
                  <label for="boundary-front">Front:</label>
                  <input type="number" id="boundary-front" v-model="form.boundaryFront" required />
                </div>
                <div class="column">
                  <label for="boundary-right">Right:</label>
                  <input type="number" id="boundary-right" v-model="form.boundaryRight" required />
                </div>
                <div class="column">
                  <label for="boundary-left">Left:</label>
                  <input type="number" id="boundary-left" v-model="form.boundaryLeft" required />
                </div>
                <div class="column">
                  <label for="boundary-rear">Rear:</label>
                  <input type="number" id="boundary-rear" v-model="form.boundaryRear" required />
                </div>
              </div>
            </div>

            <div id="construction-information">
              <h3>Construction Information</h3>
              <table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Materials</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(materials, className) in constructionClasses":key="className">
                    <td>{{ className }}</td>
                    <td>
                      <ul>
                        <li v-for="material in materials":key="material">{{ material }}</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="column other-information">
              <label><b>Other Property Information:</b></label><br><br>

              <label for="loc-congested-area">Is the property located in a congested area?</label>
              <select id="loc-congested-area" v-model="form.loc_congested_area" required @change="toggleInfo('loc-congested-area')">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select><br><br>
              <div v-if="showInfo.loc_congested_area">
                <label for="loc-congested-area-details">Please provide details:</label>
                <input type="text" id="loc-congested-area-details" v-model="form.loc_congested_area_details"><br><br>
              </div>

              <label for="loc-explosive">Does the property have explosives?</label>
              <select id="loc-explosive" v-model="form.loc_explosive" required @change="toggleInfo('loc-explosive')">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select><br><br>
              <div v-if="showInfo.loc_explosive">
                <label for="loc-explosive-details">Please provide details:</label>
                <input type="text" id="loc-explosive-details" v-model="form.loc_explosive_details"><br><br>
              </div>

              <label for="loc-flood-prone">Is the property located in a flood-prone area?</label>
              <select id="loc-flood-prone" v-model="form.loc_flood_prone" required @change="toggleInfo('loc-flood-prone')">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select><br><br>
              <div v-if="showInfo.loc_flood_prone">
                <label for="loc-flood-prone-details">Please provide details:</label>
                <input type="text" id="loc-flood-prone-details" v-model="form.loc_flood_prone_details"><br><br>
              </div>

              <label for="fire-loss">Have you ever had a fire loss in this premises?</label>
          <select id="fire-loss" v-model="form.fire_loss" required>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select><br><br>
          <div v-if="form.fire_loss === 'yes'">
            <label for="fire-loss-date">When? (Date):</label>
            <input type="date" id="fire-loss-date" v-model="form.fire_loss_date"><br><br>
          </div>

          <label for="policy-cancelled">Have you ever had a policy of fire insurance cancelled?</label>
          <select id="policy-cancelled" v-model="form.policy_cancelled" required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select><br><br>
          <div v-if="form.policy_cancelled === 'yes'">
            <input type="text" id="policy-cancelled-company" v-model="form.policy_cancelled_company" placeholder="If yes, specify company" required>
            <label for="policy-cancelled-date">When? (Date):</label>
            <input type="date" id="policy-cancelled-date" v-model="form.policy_cancelled_date"><br><br>
          </div>

          <label for="risk-declined">Have you ever had this risk declined by any other company?</label>
          <select id="risk-declined" v-model="form.risk_declined" required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select><br><br>
          <div v-if="form.risk_declined === 'yes'">
            <input type="text" id="risk-declined-company" v-model="form.risk_declined_company" placeholder="If yes, specify company" required>
            <label for="risk-declined-date">When? (Date):</label>
            <input type="date" id="risk-declined-date" v-model="form.risk_declined_date"><br><br>
          </div>
            </div>
          </div>
            <div class="section">
              <h2>Offered Packages</h2>
              <label for="package">Select a Package:</label>
              <select id="package" v-model="selectedPackage" required>
                <option v-for="(inclusions, packageName) in packages" :key="packageName" :value="packageName">
                  {{ packageName }}
                </option>
              </select>
              <br /><br />
          
              <div id="package-inclusions" v-if="selectedPackage">
                <h3>Package Inclusions</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Package</th>
                      <th>Inclusions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ selectedPackage }}</td>
                      <td>
                        <ul>
                          <li v-for="item in packages[selectedPackage]" :key="item">
                            {{ item }}
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br /><br />
            </div>
          <button type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient('https://yebzeglvqfxiiwzijmmr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllYnplZ2x2cWZ4aWl3emlqbW1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyMTM3NjEsImV4cCI6MjA1NTc4OTc2MX0.6MQl_8jO7EyCxewwvV4RancZ4cX_B5IGEfcPbjF8a5E');
export default {
  data() {
    return {
      form: {
        last_name: "",
        given_name: "",
        middle_name: "",
        dob: "",
        interest_on_property: "",
        phone_num: "",
        email_add: "",
        mailing_address: "",
        tel_num_res: "",
        tel_num_off: "",
        address: "",
        region: "",
        province: "",
        city: "",
        barangay: "",
        village_name: "",
        condo_name: "",
        building_improvements: 0,
        household_contents: 0,
        swimming_pool: 0,
        gazebo: 0,
        water_tank: 0,
        pump_house: 0,
        dirty_kitchen: 0,
        concrete_fence: 0,
        noOfStorey: 1,
        yearBuilt: "",
        floorArea: 1,
        roofing: "",
        roofingOther: "",
        boundaryFront: "",
        boundaryRight: "",
        boundaryLeft: "",
        boundaryRear: "",
        loc_congested_area: "",
        loc_congested_area_details: "",
        loc_explosive: "",
        loc_explosive_details: "",
        loc_flood_prone: "",
        loc_flood_prone_details: "",
        fire_loss: "",
        fire_loss_date: "",
        policy_cancelled: "",
        policy_cancelled_company: "",
        policy_cancelled_date: "",
        risk_declined: "",
        risk_declined_company: "",
        risk_declined_date: "",
      },

      constructionClasses: { /* ... */ }, // Keep your constructionClasses
      selectedPackage: "",
      packages: {
        "Homecare Plus 2": [
          "Fire/Lightning",
          "Typhoon",
          "Flood",
          "Extended Cover",
          "Riot and Strike",
          "Malicious Damage",
          "Robbery/Burglary",
        ],
        "Homecare Enhance": ["Fire/Lightning", "Extended Cover"],
        "Homecare Plus 1": [
          "Fire/Lightning",
          "Typhoon",
          "Flood",
          "Extended Cover",
          "Riot and Strike",
          "Malicious Damage",
          "Robbery/Burglary",
        ],
        "Homecare Compre": [
          "Fire/Lightning",
          "Typhoon",
          "Flood",
          "Extended Cover",
          "Riot and Strike",
          "Malicious Damage",
          "Robbery/Burglary",
          "Broad Water Damage",
          "Bowtap",
        ],
      },

      phoneNumber: "",
      telephoneNumbers: {
        res: "",
        off: "",
      },

      date: "",
      currentYear: new Date().getFullYear(),

      showInfo: {
        loc_congested_area: false,
        loc_explosive: false,
        loc_flood_prone: false,
      },
      showInput: {
        fire_loss: false,
        policy_cancelled: false,
        risk_declined: false,
      },

      isLoading: false,
      errorMessage: "",
      successMessage: "",
      submitted: false,
    };
  },

  methods: {
    toggleInfo(field) {
      this.$set(this.showInfo, field, this.form[field] === 'yes');
      if (this.form[field] !== 'yes') {
        this.form[field + '_details'] = '';
      }
    },
    toggleInput(field) {
      this.$set(this.showInput, field, this.form[field] === 'yes');
      if (this.form[field] !== 'yes') {
        this.form[field + '_date'] = '';
        if (['policy_cancelled', 'risk_declined'].includes(field)) {
          this.form[field + '_company'] = '';
        }
      }
    },
    handleSubmit(event) {  // Add 'event' parameter if you need it
      event.preventDefault(); // Prevent default form submission (important!)
      // ... your form submission logic here ...
      console.log("Form submitted!"); // At least put a console.log here to see if it's triggered
    },
    // ... other methods (including handleSubmit if you have it)
  },

  watch: {
    'form.phone_num'(value) {
      this.form.phone_num = value.replace(/[^0-9]/g, "").slice(0, 11);
    },
    'form.tel_num_res'(value) {
      this.form.tel_num_res = value.replace(/[^0-9]/g, "").slice(0, 10);
    },
    'form.tel_num_off'(value) {
      this.form.tel_num_off = value.replace(/[^0-9]/g, "").slice(0, 10);
    },
    async submitForm() {
  console.log("Submitting form...");

  try {
    // Step 1: Insert client details into 'clients' table
    const { data: clientData, error: clientError } = await supabase
      .from("clients")
      .insert([
        {
          LastName: this.form.LastName,
          GivenName: this.form.GivenName,
          MiddleName: this.form.MiddleName,
          DateOfBirth: this.form.DateOfBirth,
          InterestOnProperty: this.form.InterestOnProperty,
          MobileNum: this.form.MobileNum,
          EmailAdd: this.form.EmailAdd,
          MailingAdd: this.form.MailingAdd,
          TelResNum: this.form.TelResNum,
          TelOffNum: this.form.TelOffNum
        }
      ])
      .select(); // Retrieve inserted row

    if (clientError) throw clientError;
    console.log("Inserted client:", clientData);

    // Get ClientID from the inserted client
    const ClientID = clientData[0]?.ClientID;
    if (!ClientID) throw new Error("ClientID not found!");

    // Step 2: Insert property information into 'property_information' table
    const { data: propertyData, error: propertyError } = await supabase
      .from("property_information")
      .insert([
        {
          ClientID: ClientID,
          PropertyAddress: this.form.PropertyAddress,
          PropertyCountry: "Philippines", // Fixed value as per your constraints
          PropertyRegion: this.form.PropertyRegion,
          PropertyProvince: this.form.PropertyProvince,
          PropertyCity: this.form.PropertyCity,
          PropertyBarangay: this.form.PropertyBarangay,
          PropertyVillageName: this.form.PropertyVillageName,
          PropertyCondoName: this.form.PropertyCondoName
        }
      ])
      .select();

    if (propertyError) throw propertyError;
    console.log("Inserted property:", propertyData);

    // Get PropertyID from the inserted property
    const PropertyID = propertyData[0]?.PropertyID;
    if (!PropertyID) throw new Error("PropertyID not found!");

    // Step 3: Insert covered properties into 'covered_properties' table (if applicable)
    const { error: coveredPropertiesError } = await supabase
      .from("covered_properties")
      .insert([
        {
          PropertyID: PropertyID,
          BuildingImprovements: this.form.BuildingImprovements ?? 0, // Ensure default values
          HouseholdContents: this.form.HouseholdContents ?? 0,
          SwimmingPool: this.form.SwimmingPool ?? 0,
          Gazebo: this.form.Gazebo ?? 0,
          WaterTank: this.form.WaterTank ?? 0,
          PumpHouse: this.form.PumpHouse ?? 0,
          DirtyKitchen: this.form.DirtyKitchen ?? 0,
          ConcreteFence: this.form.ConcreteFence ?? 0
        }
      ]);

    if (coveredPropertiesError) throw coveredPropertiesError;
    console.log("Inserted covered properties");

    // Step 4: Insert property description into 'property_description' table
    const { error: descriptionError } = await supabase
      .from("property_description")
      .insert([
        {
          PropertyID: PropertyID,
          Storey: this.form.Storey,
          YearBuilt: this.form.YearBuilt,
          FloorArea: this.form.FloorArea,
          Roofing: this.form.Roofing,
          RoofingOther: this.form.RoofingOther,
          Occupancy: this.form.Occupancy,
          OccupancyOther: this.form.OccupancyOther,
          Tenants: this.form.Tenants,
          TypeOfConstruction: this.form.TypeOfConstruction,
          BoundaryFront: this.form.BoundaryFront,
          BoundaryRight: this.form.BoundaryRight,
          BoundaryLeft: this.form.BoundaryLeft,
          BoundaryRear: this.form.BoundaryRear,
          LocationCongestedArea: this.form.LocationCongestedArea,
          LocationCongestedAreaDetails: this.form.LocationCongestedAreaDetails,
          LocationExplosives: this.form.LocationExplosives,
          LocationExplosivesDetails: this.form.LocationExplosivesDetails,
          LocationFloodProne: this.form.LocationFloodProne,
          LocationFloodProneDetails: this.form.LocationFloodProneDetails,
          FireLoss: this.form.FireLoss,
          FireLossDate: this.form.FireLossDate || null, // Nullable field
          PolicyCancelled: this.form.PolicyCancelled,
          PolicyCancelledCompany: this.form.PolicyCancelledCompany || null,
          PolicyCancelledDate: this.form.PolicyCancelledDate || null,
          RiskDeclined: this.form.RiskDeclined,
          RiskDeclinedCompany: this.form.RiskDeclinedCompany || null,
          RiskDeclinedDate: this.form.RiskDeclinedDate || null
        }
      ]);

    if (descriptionError) throw descriptionError;
    console.log("Inserted property description");

    // Step 5: Insert selected package into 'packages' table (if applicable)
    if (this.form.PackageName) {
      const { error: packageError } = await supabase
        .from("packages")
        .insert([{ PackageName: this.form.PackageName }]);

      if (packageError) throw packageError;
      console.log("Inserted package selection");
    }

    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error:", error.message);
    alert("Error submitting form: " + error.message);
  }
},
    // ... other watchers
  },

  mounted() {
    this.form.yearBuilt = new Date().getFullYear();
    this.date = `${this.currentYear}-12-31`; // If you are using this.date elsewhere
  },
};
</script>

<style>

body { /* or a container element if you don't want to affect the whole body */
    background-color: white; /* Set background to white */
    color: black; /* Set default text color to black */
}

input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
select {
    background-color: white; /* Ensure inputs have white background */
    color: black; /* Input text color to black */
}

/* If you have any elements with a specific background color that you want to keep,
   you'll need to override these rules with more specific selectors.  For example: */
.section {
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #ccc; 
    padding: 10px;
    width: auto;
    background-color: #f8f8f8; /* Example: Keep a light gray background for sections */
}

.section th {
    background-color: #f2f2f2; /* Example: Keep a different background for table headers */
}

/* General Styles */
.section {
    margin-top: 50px;
    margin-bottom: 20px;
    margin-left: 5%;
    margin-right: 5%;
    border: 1px solid #ccc;
    padding: 10px;
    max-width: 960px; /* Added max-width for responsiveness */
    margin-left: auto;
    margin-right: auto; /* Center the section */
}

h2 {
    font-size: 32px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
}

h3 {
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
}

p {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-weight: normal;
    color: #04097f;
}

.columns {
    display: flex;
    flex-wrap: wrap; /* Added flex-wrap for responsiveness */
    gap: 20px;
}

.column {
    flex: 1;
    min-width: 300px; /* Added min-width for responsiveness */
}

.other-information { /* Removed .columns prefix */
    flex-basis: 100%;
    margin-top: 20px;
}

.section table {
    width: 100%; /* Changed to 100% for responsiveness */
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    margin-top: 20px; /* Added margin for better spacing */
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

.section ul {
    list-style-type: disc;
    margin-left: 20px;
}

/* Form Element Styles */
input[type="text"],
input[type="email"],
input[type="number"],
input[type="date"],
select { /* Added select and date input */
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

label {
    display: block;
    margin-bottom: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: bold;
}

input[type="text"]::placeholder,
input[type="email"]::placeholder,
input[type="number"]::placeholder,
input[type="date"]::placeholder,
select { /* Added select and date input */
    color: #aaa;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="date"]:focus,
select:focus { /* Added select and date input */
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.2);
}

input[type="text"].error,
input[type="email"].error, /* Corrected to .error */
input[type="number"].error,
input[type="date"].error {
    border-color: red;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>") no-repeat right 10px center;
    padding-right: 30px;
}
input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid #000; /* Black border by default */
    background-color: #fff; /* White background by default */
    margin-right: 8px;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
    transition: border-color 0.2s ease, background-color 0.2s ease; /* Smooth transitions */
}

input[type="radio"]:checked {
    border-color: #000; /* Blue border when checked */
    background-color: #000; /* Keep the white background */
}


/* Style for required fields */
label[for]::after {
    content: " *";
    color: red;
}

/* Exceptions for specific labels (no asterisk) */
label[for="tel_num_res"]::after,
label[for="tel_num_off"]::after,
label[for="middle_name"]::after,
label[for="village_name"]::after,
label[for="condo_name"]::after {
    content: "";
}

/* Added styles for buttons */
button[type="submit"] {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 20px; /* Add some top margin */
}

button[type="submit"]:hover {
    background-color: #0056b3;
}

button[type="submit"]:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
select {
    /* ... other styles ... */
    color: black; /* Text color for the dropdown */
}

select option {
    color: black; /* Text color for the options in the dropdown */
}

</style>