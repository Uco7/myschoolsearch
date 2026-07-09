import { useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentSession } from "../utils/session";

// Ported from includeFolder/_admission_queryLink.ejs.
// The cutoff-mark question originally toggled a hidden div via vanilla JS;
// that's now just React state.
export default function AdmissionQueryLink() {
  const [showCutoff, setShowCutoff] = useState(false);
  const session = getCurrentSession();

  return (
    <div className="container section-txt">
      <h2 className="text-secondary">A-E Funai Federal University/Admission Queries</h2>
      <em>Click on any of the links to navigate to the page</em>
      <ul className="list-group mb-4">
        <li className="list-group-item"><Link to="/funai-admissionprocedures" className="text-decoration-none">How to apply for admission to FUNAI</Link></li>
        <li className="list-group-item"><Link to="/funai-admission-guide" className="text-decoration-none">FUNAI admission requirements for undergraduate programs</Link></li>

        <li className="list-group-item">
          <a
            href="#"
            className="text-decoration-none"
            onClick={(e) => {
              e.preventDefault();
              setShowCutoff((v) => !v);
            }}
          >
            What is the cutoff mark for FUNAI {session}?
          </a>

          {showCutoff && (
            <div className="container" style={{ paddingLeft: 20 }}>
              <p className="heading">
                For the {session} academic session, Alex Ekwueme Federal University, Ndufu-Alike (AE-FUNAI) has set the following cut-off marks for undergraduate programs (confirm current-cycle figures on the official FUNAI portal, since these change yearly):
              </p>
              <ul className="child-ul">
                <li><strong>General Cut-Off Mark:</strong> 150 in the UTME.</li>
                <li><strong>Medicine and Surgery:</strong> Minimum UTME score of 250.</li>
                <li><strong>Law:</strong> Minimum UTME score of 240.</li>
                <li><strong>Engineering:</strong> Minimum UTME score of 200.</li>
                <li><strong>Other Departments:</strong> Minimum UTME score of 150.</li>
              </ul>
              <p>These cut-off marks are applicable to candidates who selected AE-FUNAI as their first choice in the UTME.</p>
              <p><strong>Note:</strong> Meeting the minimum cut-off mark does not guarantee admission, as other factors such as O'Level results and departmental requirements are also considered.</p>
              <p>
                For detailed information on departmental-specific requirements and the admission process, please refer to the{" "}
                <a href="https://funai.edu.ng" target="_blank" rel="noopener noreferrer">official AE-FUNAI website</a>.
              </p>
            </div>
          )}
        </li>

        <li className="list-group-item"><Link to="/universities/medcine/surgry" className="text-decoration-none">Universities that offers medcine and surgry</Link></li>
        <li className="list-group-item"><Link to="/funai-admissionprocedures" className="text-decoration-none">When is the deadline for FUNAI admission?</Link></li>
        <li className="list-group-item"><Link to="/funai-post-gradute-guide-procedures/guide" className="text-decoration-none">How to apply for postgraduate programs at FUNAI?</Link></li>
        <li className="list-group-item"><Link to="/funai-homePage/admission" className="text-decoration-none">FUNAI undergraduate programs and courses offered</Link></li>
        <li className="list-group-item"><Link to="/funai-admission-portal" className="text-decoration-none">FUNAI admission portal login</Link></li>
        <li className="list-group-item"><Link to="/funai-admissionprocedures" className="text-decoration-none">How much is FUNAI acceptance fee?</Link></li>
        <li className="list-group-item"><Link to="/funai-admissionprocedures" className="text-decoration-none">FUNAI scholarship opportunities for new students</Link></li>
        <li className="list-group-item"><Link to="/funai-admissionprocedures" className="text-decoration-none">What is the admission process at FUNAI?</Link></li>
        <li className="list-group-item"><a href="https://portal.funai.edu.ng/admission-status" className="text-decoration-none" target="_blank" rel="noopener noreferrer">FUNAI admission status check</a></li>
      </ul>
    </div>
  );
}
