const [mounted, setMounted] = useState(false);
const [progreso, setProgreso] = useState(0);

useEffect(() => {
    setMounted(true);
    setProgreso(getProgreso());
}, []);

if (!mounted) return null;