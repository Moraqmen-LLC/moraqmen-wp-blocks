import { useBlockProps } from '@wordpress/block-editor';

const TestimonialsSave = ({ attributes }) => {
  const { testimonials = [], layout = 'grid', columns = 3 } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps} className={`testimonials-${layout}`}>
      <div className={`testimonials-grid columns-${columns}`}>
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial">
            {item.image && <img src={item.image} alt={item.author} className="avatar" />}
            <blockquote className="quote">"{item.quote}"</blockquote>
            <p className="author">— {item.author}</p>
            {item.role && <p className="role">{item.role}</p>}
            {item.rating && (
              <div className="rating">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSave;
