import React from "react";

const FaqSection = () => {
  const ratings = [
    { stars: 4, count: 4.0 },
    { stars: 3, count: 3.0 },
    { stars: 5, count: 3.5 },
  ];

  return (
    <div className="container mx-auto py-4">
      {/* FAQ Section */}
      <div className="faq-section mb-5">
        <div className="accordion" id="faqAccordion">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed bg-gray-100 rounded-md p-4 text-lg text-gray-800"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse`}
            >
              <span>Frequently asked questions for Paracetamol</span>
            </button>

            <div className="fw-medium bg-gray-100 mt-5 p-5 rounded-md">
              <h4 className="text-xl font-medium mb-4">Paracetamol</h4>
              <div className="questions space-y-4 text-sm text-gray-700">
                <p>Q. What if I vomit after taking Paracetamol?</p>
                <p>
                  If you vomit in less than 30 minutes after having a dose of Paracetamol
                  tablets or syrup, retake the same dose again. If you vomit after
                  30 minutes of a dose, you do not need to take another one until
                  the next standard dose.
                </p>
                <p>Q. When will I feel better after taking the Paracetamol?</p>
                <p>
                  Usually, you will start feeling better after about half an hour of
                  taking a Paracetamol.
                </p>
                <p>Q. How often can I take the Paracetamol?</p>
                <p>
                  You should only take four doses of Paracetamol in 24 hours. There should
                  be a gap of at least 4 hours between two doses. Do not take Paracetamol
                  for more than 3 days without consulting a doctor first.
                </p>
                <p>Q. Does Paracetamol make babies sleepy?</p>
                <p>
                  No, Paracetamol does not make babies sleepy. It is a pain-relieving
                  medicine that is also used to control high fever.
                </p>
                <p>Q. Is Paracetamol safe for children?</p>
                <p>
                  Paracetamol is considered safe for children only when used as directed by the doctor.
                </p>
                <p>Q. Is Paracetamol an antibiotic?</p>
                <p>
                  No, Paracetamol is not an antibiotic. It works as a painkiller and fever-reducing medicine.
                </p>
                <p>Q. Can I take Paracetamol and ibuprofen together?</p>
                <p>
                  Ibuprofen and Paracetamol are safe medicines, but both should not be used together.
                  Consult your doctor if you are not sure.
                </p>
                <p>Q. How long does a Paracetamol take to work?</p>
                <p>
                  Paracetamol takes around 30-45 min to start working and show its effects. It is advised
                  to take this medicine for the duration suggested by the doctor. Consult your doctor if
                  you experience any bothersome side effects.
                </p>
                <p>Q. What are the serious side effects of taking an excess of the Paracetamol?</p>
                <p>
                  Overdose of Paracetamol may cause severe life-threatening liver injury. Taking more
                  than the prescribed dose may also cause kidney injury, decreased platelet count,
                  and even coma. Early symptoms of an overdose include nausea, vomiting, and general
                  tiredness. Immediately consult a doctor or reach an emergency in case of a suspected overdose.
                </p>
              </div>
            </div>
          </h2>
          <div className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body"></div>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="ratings-section mb-4">
        <h5 className="mb-3 text-lg font-medium text-gray-800">Ratings & Review</h5>
        {ratings.map((rating, index) => (
          <div className="rating-item mb-3" key={index}>
            <div className="flex items-center mb-2">
              <div className="stars mr-2 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`star ${i < rating.stars ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    <i className="bi bi-star-fill"></i>
                  </span>
                ))}
              </div>
              <span className="rating-badge bg-gray-100 px-2 py-1 rounded text-sm text-gray-700">
                {rating.count}
              </span>
            </div>
            <p className="review-text mb-1 text-sm text-gray-700">
              * The medicine is good if it is a bit costly when compared with the
              exact generic medicine*
            </p>
            <p className="review-text mb-0 text-sm text-gray-700">
              * The medicine is good if it is a bit costly when compared with the
              exact generic medicine*
            </p>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="disclaimer-section">
        <h5 className="mb-3 text-lg font-medium text-gray-800">Disclaimer:</h5>
        <p className="disclaimer-text text-sm text-gray-700 leading-relaxed">
          The contents here are for informational purposes only and not intended
          to be a substitute for professional medical advice, diagnosis, or
          treatment. Please seek the advice of a physician or other qualified
          health provider with any questions you may have regarding a medical
          condition. Medikart on any information and subsequent actions is
          solely at the user's risk, and we do not assume any responsibility for
          the same. The content on the Platform should not be considered or used
          as a substitute for professional and qualified medical advice. Please
          consult your doctor for any query pertaining to medicines, tests
          and/or diseases, as we support, and do not replace the doctor-patient
          relationship.
        </p>
      </div>
    </div>
  );
};

export default FaqSection;
