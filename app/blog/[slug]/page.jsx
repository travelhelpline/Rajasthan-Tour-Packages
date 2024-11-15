import SearchBar from '@/components/SearchBar';
import { blogCategories, blogs, getBlogsByCategory } from '@/data/Blogs';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}
const BlogPost = ({ params }) => {

    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) {
        return <p>Blog not found</p>;
    }
    const filteredBlogs = getBlogsByCategory(blogs, blog.category)
    return (
        <>
            <div className="container-fluid py-4 blog-slug mt-5 pt-5" >
                <div className="container px-0 d-flex justify-content-center align-items-center w-100 days-container overview destination">
                    <div className="row d-flex justify-content-center align-items-start px-0 w-100 ">
                        <div className="col-lg-8 col-md-12 col-sm-12 px-sm-0 px-md-0 px-lg-2">
                            <div className="insider px-3">
                                <div className="slug-image-container mb-4 ">
                                    <Image
                                        src={blog.image}
                                        alt={blog.heading}
                                        width={1500}
                                        height={600}
                                    />
                                </div>
                                <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
                                    <p className="w-auto blog-author mb-0 fw-bold">{blog.author}</p>
                                    <p className="color-tertary w-auto px-0 blog-dot mb-0">▪</p>
                                    <p className="w-auto blog-date mb-0 fw-bold">{blog.date}</p>
                                </div>
                                <h1>{blog.heading}</h1>
                                <hr style={{ borderColor: 'var(--color-black)' }} />
                                <p style={{ fontWeight: 500 }}>{blog.description}</p>
                                <p>{blog.more}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-ms-12 col-sm-12 side-nav px-sm-0 px-md-0 px-lg-2">
                            <div className="sidebar-menu w-100 z-9999 mb-3 search-sidebar flex-column">
                                <p className='mb-0 text-uppercase'><span className='blog-subhead-gradient d-inline'>{blog.category}</span></p>
                                <h2 className="text-capitalize py-1">search</h2>
                                <SearchBar blogs={filteredBlogs} styles="rounded-4 w-100 p-3" placeholder="search here" />
                            </div>
                            <div className="sidebar-menu w-100 z-9999 flex-column">
                                <p className='mb-0 text-uppercase'><span className='blog-subhead-gradient d-inline'>{blog.category}</span> </p>
                                <h2 className="text-capitalize py-1">popular <span className="fw-normal d-inline">insights</span></h2>
                                <ul className="list-group list-group-flush w-100">
                                    {filteredBlogs.slice(0, 3).map((item, index) => (
                                        <li key={index} className="list-group-item">
                                            <Link className='w-100 d-flex px-0 border-0' href={`${item.slug}`}> <span className="color-tertary me-1">|</span> {item.heading}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid py-4 blog-comment bg-black text-white">
                <div className="container">
                    <div className="row py-2 justify-content-center align-items-center">
                        <span className="comment-container color-tertary bg-tertary-down w-auto d-flex justify-content-center align-items-center p-3 rounded-5 mb-2">
                            <BiSolidCommentDetail />
                        </span>
                        <h3 className="text-center text-lowercase">what's on your mind?</h3>
                    </div>
                    <div className="row justify-content-center py-3">
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default BlogPost;
