const BannerText = () => {
  return (
    <section className="grid sm:grid-cols-2">
      <img
        src="/src/assets/construction-workers.jpeg"
        alt="construction workers"
        className="object-cover min-h-[400px]"
      />
      <div className="bg-black-color-v1 text-white p-8">
        <h2 className="text-3xl font-semibold max-w-sm ">
          <span className="text-red-color-v1">25 years </span>of experencie!
        </h2>
        <p className="my-6 text-base line-clamp-4">
          We have a team of experienced professionals who have been in the industry for over 25 years. Our contractors
          have a wealth of knowledge and skills that they have acquired over the years, making them experts in their
          field.
        </p>
        <p className="text-base line-clamp-4">
          With 25 years of experience, our contractors have a deep understanding of industry standards and regulations.
          We ensure that all our projects comply with the latest safety and building codes, and that the final product
          meets or exceeds our client's expectations.
        </p>
      </div>
    </section>
  )
}

export default BannerText
