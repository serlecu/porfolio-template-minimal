import React from 'react';
import ProjDescription from '../components/pure/projDescription';
import ProjDetails from '../components/pure/projDetails';
import ProjMediaItem from '../components/pure/projMediaItem';
import ProjTitle from '../components/pure/projTitle';
import pagesData from '../data';

const Project = ({ projectId }) => {

  const project = pagesData.find((element) => element.id === projectId);

  return (
    <section className='container text-left px-0 overflow-hidden'>

      <div className='proj-header d-flex row gx-2 mb-4 align-items-center'>
        <ProjTitle title={project.title} />
        <ProjDetails details={project.details} />
      </div>

      <div className='proj-content row row-cols-2 g-4'>
        {project.featured ?
          (
            <div className='proj-featured'>
              <ProjMediaItem item={project.featured} />
            </div>
          ) : null}

        <div className='proj-desc'>
          <ProjDescription descriptions={project.description} />
        </div>

        {project.media.map((item, index) =>
        (
          <div className={`proj-media-${item.type}`}
            key={index}>
            <ProjMediaItem item={item} />
          </div>
        ))
        }
      </div>

    </section>
  );
}

export default Project;
