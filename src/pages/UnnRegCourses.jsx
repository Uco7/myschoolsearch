import LegacyContentPage from "../components/LegacyContentPage";
import HotLinks from "../components/HotLinks";
import { jambHotLink6 } from "../data/hotLinksData";

const html = `<!--include  header file -->
    

    <div class="container section-txt">
        <h2 class="text-center text-primary">How to Register for Courses Online at UNN</h2>
        <p class="text-center">Follow these steps to successfully register for your courses.</p>

        <div class="accordion" id="courseRegistration">
            <!-- Step 1 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#step1">
                        Step 1: Log in to the UNN Student Portal
                    </button>
                </h2>
                <div id="step1" class="accordion-collapse collapse show" data-bs-parent="#courseRegistration">
                    <div class="accordion-body">
                        <ul>
                            <li>Visit the <a href="https://unnportal.unn.edu.ng" target="_blank">UNN student portal</a>.</li>
                            <li>Click on <b>“Student Login”</b>.</li>
                            <li>Enter your <b>Matric Number</b> and <b>Password</b>.</li>
                            <li>Click <b>Login</b> to access your dashboard.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Step 2 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#step2">
                        Step 2: Navigate to Course Registration
                    </button>
                </h2>
                <div id="step2" class="accordion-collapse collapse" data-bs-parent="#courseRegistration">
                    <div class="accordion-body">
                        <ul>
                            <li>Go to the <b>“Course Registration”</b> section.</li>
                            <li>Select the appropriate <b>session and semester</b>.</li>
                            <li>A list of available courses will be displayed.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#step3">
                        Step 3: Select Your Courses
                    </button>
                </h2>
                <div id="step3" class="accordion-collapse collapse" data-bs-parent="#courseRegistration">
                    <div class="accordion-body">
                        <ul>
                            <li>Select all <b>compulsory and elective</b> courses.</li>
                            <li>Ensure your <b>credit load</b> does not exceed the required limit.</li>
                            <li>Review your selections before proceeding.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Step 4 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#step4">
                        Step 4: Submit and Print Course Form
                    </button>
                </h2>
                <div id="step4" class="accordion-collapse collapse" data-bs-parent="#courseRegistration">
                    <div class="accordion-body">
                        <ul>
                            <li>Click <b>“Submit”</b> to complete registration.</li>
                            <li>Print your <b>Course Form</b> for reference.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Step 5 -->
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#step5">
                        Step 5: Get Departmental Approval
                    </button>
                </h2>
                <div id="step5" class="accordion-collapse collapse" data-bs-parent="#courseRegistration">
                    <div class="accordion-body">
                        <ul>
                            <li>Take the printed course form to your <b>department.</b></li>
                            <li>Your <b>HOD or course adviser</b> must approve the courses.</li>
                            <li>Make corrections if necessary before the deadline.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Important Notes -->
        <div class="mt-4">
            <h4 class="text-danger">Important Notes:</h4>
            <ul>
                <li><b>Deadline:</b> Ensure you register before the official deadline.</li>
                <li><b>Credit Load:</b> Do not exceed the maximum allowed credit units.</li>
                <li><b>Corrections:</b> Changes can only be made before approval.</li>
            </ul>
        </div>
    </div>

    

     <!-- foooter ......................................... -->
  
  <script src="js/index.js"></script>`;

export default function UnnRegCourses() {
  return (
    <LegacyContentPage
      title="UNN Course Registration Guide \u2013 Step-by-Step for Students | MySearch Query"
      description="Learn how to register for your UNN courses online with this simple step-by-step guide. Includes instructions for logging into the portal, selecting courses, submitting, and printing your registration slip."
      html={html}
    >
      <HotLinks title="Hot links" links={jambHotLink6} />
    </LegacyContentPage>
  );
}
