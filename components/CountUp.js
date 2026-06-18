import { useCallback, useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
  format
}) {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const startTimeRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const getDecimalPlaces = (num) => {
    const str = num.toString();

    if (str.includes(".")) {
      const decimals = str.split(".")[1];

      if (parseInt(decimals, 10) !== 0) {
        return decimals.length;
      }
    }

    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest) => {
      if (typeof format === "function") {
        return format(latest);
      }

      const hasDecimals = maxDecimals > 0;

      const options = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator, format]
  );

  // 기본 값 설정
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === "down" ? to : from);
    }
  }, [from, to, direction, formatValue]);

  // 뷰포트 진입 감지
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 카운트 애니메이션
  useEffect(() => {
    if (!isInView || !startWhen) return;

    const startValue = direction === "down" ? to : from;
    const endValue = direction === "down" ? from : to;
    const totalDuration = Math.max(duration, 0.1) * 1000;
    const delayMs = Math.max(delay, 0) * 1000;

    if (typeof onStart === "function") onStart();

    const animate = (timestamp) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (elapsed < delayMs) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((elapsed - delayMs) / totalDuration, 1);
      const current = startValue + (endValue - startValue) * progress;

      if (ref.current) {
        ref.current.textContent = formatValue(current);
      }

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else if (typeof onEnd === "function") {
        onEnd();
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, startWhen, direction, from, to, duration, delay, formatValue, onStart, onEnd]);

  return <span className={className} ref={ref} />;
}

