import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions=({ options, onFeedback })=> (
      <div>
        {options.map(option => (
            <button
                type="button"
                data-action={option}
                onClick={onFeedback}
                className= {s.button}
                key={option}>
                    {option}
            </button>
        ))}
    </div>

    // <div>
    //     <h1>Please leave feedback</h1>
    //     <div>
    //         {/* {itemName.map(item => (
    //             <p> <button onClick={() => onFeedback(item)} className="button good" type="button">{getItemName(item)}{ ' '}</button></p>
    //         ))} */}
    //         <button onClick={() => onFeedback(status)} className="button good" type="button">Good</button>
    //         <button onClick={() => onFeedback(status)} className="button neutral" type="button">Neutral</button>
    //         <button onClick={() => onFeedback(status)} className="button bad" type="button">Bad</button>
    //     </div>
    //     <h2>Statistics</h2>
    //     <p>Good:</p>
    //     <p>Neutral:</p>
    //     <p>Bad:</p></div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;