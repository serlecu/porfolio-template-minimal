import React from 'react';
import ProjDescription from '../components/pure/projDescription';
import ProjDetails from '../components/pure/projDetails';
import ProjectMediaItem from '../components/pure/projectMediaItem';
import ProjTitle from '../components/pure/projTitle';
import pagesData from '../data';

const Project = ({ projectId }) => {

  const project = pagesData.find((element) => element.id === projectId);
  console.log(project);

  return (
    <section className='container text-left px-0 overflow-hidden'>

      {/* Title & Details */}
      <div className='proj-header d-flex row gx-2 mb-4 align-items-center'>
        <ProjTitle title={project.title} />
        <ProjDetails details={project.details} />
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
          <ProjDescription descriptions={project.description} />
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
