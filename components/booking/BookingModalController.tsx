"use client";

import * as React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import BookingModal from "@/components/booking/BookingModal";

const BOOKING_QUERY_KEY = "booking";
const BOOKING_QUERY_VALUE = "1";

export default function BookingModalController() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOpen = searchParams.get(BOOKING_QUERY_KEY) === BOOKING_QUERY_VALUE;

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextOpen) {
        params.set(BOOKING_QUERY_KEY, BOOKING_QUERY_VALUE);
      } else {
        params.delete(BOOKING_QUERY_KEY);
      }

      const query = params.toString();
      const nextHref = query ? `${pathname}?${query}` : pathname;
      router.replace(nextHref, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  if (!isOpen) {
    return null;
  }

  return <BookingModal open={isOpen} onOpenChange={handleOpenChange} />;
}
