export default function Github() {
  return (
    <>
      <section id="github" className="w-full mb-24">
        <div className="h-[7rem] bg-black text-white text-3xl flex items-center justify-center  mb-12">
          GitHub Stats
        </div>
        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <div className="flex md:flex-row flex-col justify-between gap-10">
            <img
              src="https://github-readme-stats.vercel.app/api?username=avinashyadav16&theme=dark&hide_border=false&include_all_commits=true&count_private=true"
              alt=""
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=avinashyadav16&theme=dark&hide_border=false"
              alt=""
            />
            <img
              src="https://github.com/users/avinashyadav16/contributions"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
