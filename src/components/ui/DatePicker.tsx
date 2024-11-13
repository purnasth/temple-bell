import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { TbCalendarEvent, TbUserPlus } from 'react-icons/tb';

const DatePicker: React.FC = () => {
  const [range, setRange] = useState<DateRange | undefined>();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [guests, setGuests] = useState({ adults: 0, children: 0 });
  const [month, setMonth] = useState<Date | undefined>(undefined);

  const calendarRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  const handleSelect = (selectedRange: DateRange | undefined) => {
    setRange(selectedRange);
    if (selectedRange?.from) {
      setMonth(selectedRange.from);
    }
  };

  const handleDateInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const handleGuestInputClick = () => {
    setIsGuestOpen(!isGuestOpen);
  };

  const handleSubmit = () => {
    if (range?.from && range?.to) {
      alert(
        `Check-in: ${range.from.toDateString()}, Check-out: ${range.to.toDateString()}\n` +
          `Guests: ${guests.adults} Adults, ${guests.children} Children`,
      );
    } else {
      alert('Please select both check-in and check-out dates.');
    }
    setIsCalendarOpen(false);
    setIsGuestOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
      if (
        guestRef.current &&
        !guestRef.current.contains(event.target as Node)
      ) {
        setIsGuestOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formattedRange =
    range?.from && range?.to
      ? `${format(range.from, 'MMM dd, yyyy')} - ${format(range.to, 'MMM dd, yyyy')}`
      : 'Check-in / Check-out';

  const formattedGuests =
    guests.adults || guests.children
      ? `${guests.adults} Adult${guests.adults > 1 ? 's' : ''}${
          guests.children
            ? ` + ${guests.children} Child${guests.children > 1 ? 'ren' : ''}`
            : ''
        }`
      : 'No. of guests';

  const handleGuestChange = (type: 'adults' | 'children', change: number) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + change),
    }));
  };

  const isSubmitDisabled = !range?.from || !range?.to || guests.adults === 0;

  return (
    <div className="flex items-center gap-0 px-2">
      {/* Date Input */}
      <div
        ref={calendarRef}
        className="relative flex items-center gap-0 border border-logo-maroon/30"
      >
        <div className="flex items-center gap-2 pl-3 backdrop-blur">
          <label htmlFor="datePicker" className="cursor-pointer">
            <TbCalendarEvent className="text-base text-logo-maroon" />
          </label>
          <input
            id="datePicker"
            type="text"
            readOnly
            value={formattedRange}
            onClick={handleDateInputClick}
            className="w-52 cursor-pointer bg-transparent py-2 text-sm focus:outline-none"
          />
        </div>
        {isCalendarOpen && (
          <div className="absolute left-0 top-full z-10 mt-2 origin-top-left scale-[0.72] border bg-light/10 p-2 shadow-md backdrop-blur">
            <DayPicker
              mode="range"
              selected={range}
              onSelect={handleSelect}
              month={month || range?.from || new Date()}
              onMonthChange={setMonth}
              numberOfMonths={1}
              captionLayout="dropdown"
              fromYear={new Date().getFullYear()}
              toYear={new Date().getFullYear() + 1}
              modifiersClassNames={{
                dropdown: 'max-h-40 overflow-y-scroll',
              }}
            />
          </div>
        )}
      </div>

      {/* Guest Selector */}
      <div
        ref={guestRef}
        className="relative flex items-center gap-0 border border-logo-maroon/30"
      >
        <div className="flex items-center gap-2 pl-3 backdrop-blur">
          <label htmlFor="guests" className="cursor-pointer">
            <TbUserPlus className="text-base text-logo-maroon" />
          </label>
          <input
            type="text"
            readOnly
            value={formattedGuests}
            onClick={handleGuestInputClick}
            className="w-36 cursor-pointer bg-transparent py-2 text-sm backdrop-blur focus:outline-none"
          />
        </div>
        {isGuestOpen && (
          <div className="absolute left-0 top-full z-10 mt-2 w-56 origin-top-left scale-[0.81] border border-logo-maroon/30 bg-light/10 p-2 shadow-md backdrop-blur">
            <div className="mb-2 flex justify-between">
              <span>Adults</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleGuestChange('adults', -1)}
                  disabled={guests.adults <= 0}
                  className="px-2 py-1 text-sm font-bold text-gray-600 disabled:text-gray-300"
                >
                  -
                </button>
                <span>{guests.adults}</span>
                <button
                  onClick={() => handleGuestChange('adults', 1)}
                  className="px-2 py-1 text-sm font-bold text-gray-600"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Children</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleGuestChange('children', -1)}
                  disabled={guests.children <= 0}
                  className="px-2 py-1 text-sm font-bold text-gray-600 disabled:text-gray-300"
                >
                  -
                </button>
                <span>{guests.children}</span>
                <button
                  onClick={() => handleGuestChange('children', 1)}
                  className="px-2 py-1 text-sm font-bold text-gray-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className={`origin-left scale-90 border border-logo-maroon bg-logo-maroon px-4 py-2 text-light ${isSubmitDisabled ? 'cursor-not-allowed' : ''}`}
      >
        Check Availability
      </button>
    </div>
  );
};

export default DatePicker;
