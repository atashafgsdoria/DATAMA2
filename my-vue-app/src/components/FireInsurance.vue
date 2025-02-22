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
                  <input type="tel" id="phone_num" v-model="form.phone_num" placeholder="09000000000" pattern="[0-9]{11}" required />
        
                  <label for="email_add">Email Address:</label>
                  <input type="email" id="email_add" v-model="form.email_add" placeholder="juandelacruz@domain.com" required />
        
                  <label for="mailing_address">Mailing Address:</label>
                  <input type="text" id="mailing_address" v-model="form.mailing_address" placeholder="3 Humabon, Makati" required />
        
                  <label for="tel_num_res">Telephone No. (Residential):</label>
                  <input type="text" id="tel_num_res" v-model="form.tel_num_res" placeholder="0288529232" pattern="[0-9]{0,10}" />
        
                  <label for="tel_num_off">Telephone No. (Office):</label>
                  <input type="text" id="tel_num_off" v-model="form.tel_num_off" placeholder="0288529232" pattern="[0-9]{0,10}" />
                </div>
              </div>
              <button type="submit">Submit</button>
          </div>

          <div class="section">
              <h2>Property Information</h2>
              <div class="columns">
                <div class="column">
                  <label for="address">House No./Street/Purok/Subdivision:</label>
                  <input type="text" id="address" v-model="form.address" placeholder="3 Humabon, Makati, 1232 Kalakhang Maynila" required />
          
                  <label for="country">Country:</label>
                  <input type="text" id="country" v-model="form.country" required @input="validateCountry" />
          
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
                  <label><b>Boundaries:</b></label>
                  <label for="boundary-front">Front:</label>
                  <input type="number" id="boundary-front" v-model="form.boundaryFront" required />
          
                  <label for="boundary-right">Right:</label>
                  <input type="number" id="boundary-right" v-model="form.boundaryRight" required />
          
                  <label for="boundary-left">Left:</label>
                  <input type="number" id="boundary-left" v-model="form.boundaryLeft" required />
          
                  <label for="boundary-rear">Rear:</label>
                  <input type="number" id="boundary-rear" v-model="form.boundaryRear" required />
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
                    <tr v-for="(materials, className) in constructionClasses" :key="className">
                      <td>{{ className }}</td>
                      <td>
                        <ul>
                          <li v-for="material in materials" :key="material">{{ material }}</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
          
              <div class="column other-information">
                <label><b>Other Property Information:</b></label><br><br>
                <label for="loc-congested-area">Is the property located in a congested area?</label>
                <select id="loc-congested-area" name="loc-congested-area" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select><br><br>
                <label for="loc-explosive">Does the property have explosives?</label>
                <select id="loc-explosive" name="loc-explosive" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select><br><br>
                <label for="loc-flood-prone">Is the property located in a flood-prone area?</label>
                <select id="loc-flood-prone" name="loc-flood-prone" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select><br><br>
                <label for="fire-loss">Have you ever had a fire loss in this premises?</label>
                <select id="fire-loss" name="fire-loss" required>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select><br><br>
                <label for="policy-cancelled">Have you ever had a policy of fire insurance cancelled?</label>
                <select id="policy-cancelled" name="policy-cancelled" required>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select><br><br>
                <label for="risk-declined">Have you ever had this risk declined by any other company?</label>
                <select id="risk-declined" name="risk-declined" required>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select><br><br>
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
        country: "",
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
      },

      constructionClasses: {
        "Class A": [
          "Reinforced Concrete",
          "Concrete Hollow Blocks",
          "Bricks",
          "Stones",
          "Sheets of Galvanized Iron",
          "Steel",
          "Asbestos",
          "Aluminum",
        ],
        "Class B": [
          "Concrete and Timber",
          "Mixed Construction (More than 50% Timber)",
        ],
        "Class C": ["Bamboo", "Sawali", "Nipa", "Cogon", "Thatch", "Grass"],
      },

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

      country: "",
      date: "",
      currentYear: new Date().getFullYear(),

      additionalFields: {
        "policy-cancelled": false,
        "risk-declined": false,
        "fire-loss": false,
        "loc-congested-area": false,
        "loc-explosive": false,
        "loc-flood-prone": false,
      },

      otherFields: {
        "property-type": false,
      },

      isLoading: false,
      errorMessage: "",
      successMessage: "",
      submitted: false,
    };
  },
  
  methods: {
    toggleInput(selectId) {
      this.$set(this.additionalFields, selectId, !this.additionalFields[selectId]);
    },
    toggleInfo(selectId) {
      if (["policy-cancelled", "risk-declined"].includes(selectId)) {
        this.$set(this.additionalFields, selectId, !this.additionalFields[selectId]);
      }
    },
    toggleOtherField(field) {
      this.$set(this.otherFields, field, !this.otherFields[field]);
    },
    validateCountry() {
      if (this.country !== "Philippines") {
        alert('Please enter "Philippines"');
      }
    },
  },

  watch: {
    phoneNumber(value) {
      this.phoneNumber = value.replace(/[^0-9]/g, "").slice(0, 11);
    },
    telephoneNumbers: {
      handler(value) {
        this.telephoneNumbers.res = value.res.replace(/[^0-9]/g, "").slice(0, 10);
        this.telephoneNumbers.off = value.off.replace(/[^0-9]/g, "").slice(0, 10);
      },
      deep: true,
    },
  },

  mounted() {
    console.log("Component mounted!");
    this.date = `${this.currentYear}-12-31`;
  },
};
</script>


