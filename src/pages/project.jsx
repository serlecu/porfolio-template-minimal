import React from 'react';
import ProjectMediaItem from '../components/pure/projectMediaItem';
import pagesData from '../data';

const Project = ({ projectId }) => {

  const project = pagesData.find((element) => element.id === projectId);
  console.log(project);

  return (
    <section className='container text-left px-0 overflow-hidden'>

      {/* Title & Details */}
      <div className='proj-header d-flex flex-row gx-4 mb-4 align-items-center"'>
        <h2 className='proj-title col-auto px-0'>
          {project.title}
        </h2>
        <p className='proj-details col-auto text-secondary px-0'>
          [ {project.details.media} | {project.details.year} ]
        </p>
      </div>

      {/* Content */}
      <div className='proj-content row row-cols-2 g-4'>

        {/* <div className='col-5 px-0'> */}
        {/* Featured */}
        {project.featured ?
          (
            <div className='proj-featured'>
              <ProjectMediaItem item={project.featured} />
            </div>
          ) : null}
        {/* Descriptions */}
        <div className='proj-desc'>
          {project.description.map((text, index) => (
            <p key={index}
              className='proj-description'>
              {text.value}
            </p>
          ))}
        </div>
        {/* Media */}
        {/* <div className='proj-media col'> */}
        {/* </div> */}
        {project.media.map((item, index) =>
        (
          <div className={`proj-media-${item.type}`}
            key={index}>
            <ProjectMediaItem item={item} />
          </div>
        ))
        }

        {/* </div> */}

        {/* <div className='col-6'> */}
        {/* Descriptions */}
        {/* <div className='row p-0 py-2 gy-5'>
            {project.description.map((text, index) => (
              <p key={index}
                className='proj-description col-12'>
                {text.value}
              </p>
            ))}
          </div>
        </div> */}

      </div>

    </section>
  );
}

export default Project;
