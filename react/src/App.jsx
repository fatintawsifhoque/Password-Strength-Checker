import { useState, useEffect, useMemo } from 'react';

function App() {
  const [passw, setPassw] = useState('');
  const [status, setStatus] = useState('');

  const checkLength = useMemo(() => passw.length >= 12, [passw]);
  const checkLower = useMemo(() => /[a-z]/.test(passw), [passw]);
  const checkUpper = useMemo(() => /[A-Z]/.test(passw), [passw]);
  const checkDigit = useMemo(() => /\d/.test(passw), [passw]);
  const checkSpecial = useMemo(() => /[^A-Za-z0-9]/.test(passw), [passw]);

  useEffect(() => {
    if (!passw) {
      setStatus('');
      return;
    }

    if (checkLength && checkLower && checkUpper && checkDigit && checkSpecial) {
      setStatus('strong');
    } 
    else if (passw.length >= 8 && (checkLower || checkUpper) && checkDigit) {
      setStatus('medium');
    } 
    else {
      setStatus('weak');
    }
  }, [passw, checkLength, checkLower, checkUpper, checkDigit, checkSpecial]);

  const getStatusColor = () => {
    if (status === 'weak') return 'text-red-500';
    if (status === 'medium') return 'text-yellow-500';
    if (status === 'strong') return 'text-green-500';
    return '';
  };

  const getCheckColor = (isValid) => isValid ? 'text-green-600' : 'text-slate-400';

  return (
    <section className="h-[95vh] w-screen bg-sky-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6 text-slate-700">Password Strength Checker</h1>
      
      <div className="relative">
        <input 
          type="password" 
          className="border-2 border-slate-300 rounded-lg h-12 w-80 pl-4 pr-20 outline-none focus:border-sky-500 transition" 
          placeholder="Type your password" 
          value={passw}
          onChange={(e) => setPassw(e.target.value)}
        />
        <p className={`absolute right-4 top-1/2 -translate-y-1/2 font-bold text-sm capitalize ${getStatusColor()}`}>
          {status}
        </p>
      </div>

      <div className="mt-6 space-y-1 text-sm text-slate-600">
        <p className={getCheckColor(checkLength)}>
          {checkLength ? '✓' : '✗'} At least 12 characters
        </p>
        <p className={getCheckColor(checkLower)}>
          {checkLower ? '✓' : '✗'} One lowercase letter
        </p>
        <p className={getCheckColor(checkUpper)}>
          {checkUpper ? '✓' : '✗'} One uppercase letter
        </p>
        <p className={getCheckColor(checkDigit)}>
          {checkDigit ? '✓' : '✗'} One number
        </p>
        <p className={getCheckColor(checkSpecial)}>
          {checkSpecial ? '✓' : ''} One special character
        </p>
      </div>
    </section>
  );
}

export default App;