import React from "react";

function JobListing(props) {
  const tags = [
    props.job.role,
    props.job.level,
    ...props.job.tools,
    ...props.job.languages,
  ];

  return (
    <div className={props.job.featured ? "job-listing job-listing-featured" : "job-listing"}>
      <img
        className="job-logo"
        alt={props.job.company}
        src={props.job.logo}
      ></img>
      <div className="job-details">
        <div className="details-top">
          <p className="job-company">{props.job.company}</p>
          {props.job.new && <p className="new-tab">New!</p>}
          {props.job.featured && <p className="featured-tab">Featured</p>}
        </div>
        <h3 className="job-position">{props.job.position}</h3>
        <div className="details-bottom">
          <p className="posted-date">{props.job.postedAt}</p>
          <p>·</p>
          <p className="contract">{props.job.contract}</p>
          <p>·</p>
          <p className="location">{props.job.location}</p>
        </div>
        </div>
        <div className="tags">
          {tags.map((tag, key) => (
            <button key={props.job.id + Math.random()} onClick={() => !props.filters.includes(tag) && props.setFilters(props.filters.concat(tag))} className="btn-tag btn">{tag}</button>
          ))}
        </div>
    </div>
  );
}

export default JobListing;
