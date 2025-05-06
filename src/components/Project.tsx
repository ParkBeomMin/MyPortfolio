const Project = () => {
  return (
    <section id="projects">
        <h3 className="text-2xl font-bold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded p-4 shadow">
            <h4 className="font-semibold text-lg mb-2">통합회원 시스템</h4>
            <p className="text-sm text-gray-600 mb-2">Next.js + OAuth2 기반 로그인 시스템 구축</p>
            <a href="https://github.com/parkbeommin/project-a" className="text-blue-600 text-sm">🔗 GitHub</a>
        </div>
        <div className="border rounded p-4 shadow">
            <h4 className="font-semibold text-lg mb-2">메인 서비스 개편</h4>
            <p className="text-sm text-gray-600 mb-2">사용자 경험 기반 메인 UI 리디자인 및 퍼포먼스 최적화</p>
            <a href="https://github.com/parkbeommin/project-b" className="text-blue-600 text-sm">🔗 GitHub</a>
        </div>
        </div>
    </section>
  );
};

export default Project;