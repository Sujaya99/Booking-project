import React from "react";

function Filters({ filterContent }) {
  return (
    <div>
      {filterContent.map((filterContents, index) => (
        <div key={index} className="d-flex justify-content-between pt-4">
          {filterContents.bookTicketFilters.map((filter, filterIndex) => (
            <div key={filterIndex}>
              <h3>{filter.bookTitle}</h3>
              {filter.type === "dropdown" && (
                <select className="form-select select-input">
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              {filter.type === "input" && (
                <input type="text" className="form-control input-value" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default Filters;

// filterContent.map((filterContent, index) => (
//   <div key={index} className="d-flex justify-content-between pt-4">
//     {filterContent.bookTicketFilters.map((filter, filterIndex) => (
//       <div key={filterIndex}>
//         <div className="pb-3">{filter.filterTitle}</div>
//         {filter.type === "dropdown" && (
//           <select className="form-select select-input">
//             {filter.options.map((option, optionIndex) => (
//               <option key={optionIndex} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         )}
//         {filter.type === "input" && (
//           <input type="text" className="form-control input-value" />
//         )}
//       </div>
//     ))}
//   </div>
// ));
